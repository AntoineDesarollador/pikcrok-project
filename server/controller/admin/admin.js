import { success, error } from "../../helper/index.js";
import Query from "../../model/query.js";
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const saltRounds = 9;

const checkToken = async (req, res) => {
    try {
        const query = "SELECT * FROM admin";
        const [user] = await Query.findByValue(query, req.params.id);
        
        if(user){
            const msg = "Utilisateur récupéré";
            res.status(200).json(success(msg, user));
        } else {
            const msg = "Pas de compte avec ces identifiants";
            res.status(200).json(success(msg));
        }

    } catch (error) {
        throw Error(error);
    }
}



const signup = async (req, res) => {
    try {    
        const query = "SELECT email password FROM admin WHERE email = ?";
        const [isUserExist] = await Query.findByValue(query, req.body.email);

        if(!isUserExist){
            const hashedPWD = bcrypt.hashSync(req.body.password, saltRounds);
            const email = req.body.email
            const query = "INSERT INTO admin (email, isAdmin, password) VALUES (?,?,?)";
            const result = await Query.write(query, {email, hashedPWD});
            
            res.status(201).json(success("utilisateur créé !", result));
        }
    } catch (error) {
        throw Error(error);
    }
}

const signin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const query1 = "SELECT id, email, password FROM admin WHERE email = ?";
        const [user] = await Query.findByValue(query1, email);
        if(!user || (user.email !== req.body.email)){
            res.status(401).json(error("problème d'identifiant"));
            return;
        }
        const isSame = bcrypt.compareSync(password, user.password);
        if(isSame){
            const TOKEN = jwt.sign({id: user.id}, TOKEN_SECRET );

            const { email } = user;
            res.status(200).json(success("Connexion réussi", {TOKEN, email}));
        } else {
            res.status(401).json(error("problème d'identifiant"));
        }
    } catch (error) {
        throw Error(error);
    }
}

export {checkToken, signup, signin};