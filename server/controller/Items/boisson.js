

import { success } from "../../helper/index.js";
import Query from "../../model/query.js";



// // requête sql pour pour récupérer toutes les information d'un produit utile pour la gestion des stock
// SELECT * 
// FROM tea
// JOIN tea_packaging ON tea_packaging.tea_id = tea.id
// JOIN packaging ON tea_packaging.packaging_id = packaging.id
// WHERE tea.id = ? 

// // pour avoir les infos : prix, quantité en stock et le conditionnement d'un produit
// SELECT quantity_in_stock, price, weight 
// FROM tea_packaging
// JOIN packaging ON tea_packaging.packaging_id = packaging.id
// WHERE tea_packaging.tea_id = 1

export const allDrink = async (req, res) => {
    try {
        // const query = "SELECT * FROM tea";
        const query = "SELECT title, description, img FROM boisson";
        const [drink] = await Query.find(query);
        if(drink.length){
            const msg = "Récupération de toutes les boissons";
            res.status(200).json(success(msg, drink));
        } else {
            const msg = "Pas encore de boisson en BDD";
            res.status(200).json(success(msg));
        }
    } catch (err) {
        throw Error(err);
    }
}


export const one = async (req, res) => {
    try {
        const queryDrink = "SELECT * FROM boisson WHERE id = ?";
      

        const drink = await Query.findByValue(queryDrink, req.params.id);
      
        
        const finalDrink = {...drink[0]}; // regroupe les données dans un même objet

        if(!drink.length){
            const msg = "Cette boisson n'existe pas en BDD";
            res.status(200).json(success(msg));
        } else {
            const msg = "Récupération de " + finalDrink.title;
            res.status(200).json(success(msg, finalDrink));
        }
    } catch (err) {
        throw Error(err);
    }
}


export const update = async (req, res) => {
    try {
        const query = "UPDATE boisson SET title= ?, description= ?, img= ? WHERE id= ?"
        const [result] = await Query.write(query, req.body)

        const id = req.params.id
        const drinkUpdated = {...req.body, id}

        if(result){
            const msg = "Catégorie modifiée.";
            res.json(success(msg, drinkUpdated));

        } else throw Error("Catégorie non modifiée, probable erreur de syntaxe dans l'objet.");
        
    } catch (err) {
        throw Error(err);
    }
}


export const removeDrink  = async (req,res) => {
    try {
        const query = "DELETE FROM boisson  WHERE id=?"

        const result = await Query.remove(query, req.params.id);
      
        if(result){
            const msg = "Boisson supprimé";
            res.json(success(msg))
        }else throw Error("Catégorie non supprimée, probable erreur de syntaxe dans l'objet.");

    
    } catch (err) {
        throw Error(err);
    }
}

export const createDrink = async (req,res) => {

    try {

        const form = formidable({
            uploadDir: "public/img/boisson",
            keepExtensions: true,
            allowEmptyFiles: false,
            maxFileSize: 5 * 1024 * 1024 * 1024, // 5Mb
            minFileSize: 10,
        });

        form.parse(req, async(err, fields, files) => {
            const {
                title,
                description,
              

            } = fields;


            const dataQuery1 = {
                title,
                img: Object.keys(files).length === 0 ? "no-picture.jpg" : files.photo.newFilename,
                description,
                
            };

        const query = "INSERT INTO boisson (title, img, description) VALUES (?,?,?)"
    const [result] = await Query.write(query, dataQuery1);

   
    const drinkCreated = { ...req.body, ...{ created: new Date()}}

  

    if(result){
                
        const msg = "crok ajouté";
        res.json(success(msg, drinkCreated))
    }else throw Error("Catégorie non supprimée, probable erreur de syntaxe dans l'objet.");
        
});

} catch (err) {
        throw Error(err);
    }
};
