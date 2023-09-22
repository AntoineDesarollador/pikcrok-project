

import { success } from "../../helper/index.js";
import Query from "../../model/query.js";
import formidable from "formidable";

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

export const all = async (req, res) => {
    try {

        
        const query = "SELECT title, img, description, prix FROM crok";

        
        const [crok] = await Query.find(query);
        if(crok.length){
            const msg = "Récupération de tous les croks";
            res.status(200).json(success(msg, crok));
        } else {
            const msg = "Pas encore de croks en BDD";
            res.status(200).json(success(msg));
        }
    } catch (err) {
        throw Error(err);
    }
}


export const one = async (req, res) => {
    try {


        const queryCrok = "SELECT * FROM crok WHERE id = ?";
      

        const crok = await Query.findByValue(queryCrok, req.params.id);
        
        const finalCrok = {...crok[0]}; // regroupe les données dans un même objet

        if(!crok.length){
            const msg = "Ce crok n'existe pas en BDD";
            res.status(200).json(success(msg));
        } else {
            const msg = "Récupération de " + finalCrok.title;
            res.status(200).json(success(msg, finalCrok));
        }
    } catch (err) {
        throw Error(err);
    }
}


export const update = async (req, res) => {
    try {

        const query = "UPDATE crok SET title= ?, img= ?, description= ?, prix= ? WHERE id= ?"

        const id = req.params.id
        const crokUpdated = {...req.body, id}
        const [result] = await Query.write(query, crokUpdated)

        

        if(result){
            const msg = "Catégorie modifiée.";
            res.json(success(msg, crokUpdated));

        } else throw Error("Catégorie non modifiée, probable erreur de syntaxe dans l'objet.");
        
    } catch (err) {
        throw Error(err);
    }
}


export const removeCrok  = async (req,res) => {
    try {

        const query = "DELETE FROM crok  WHERE id= ?"
        const result = await Query.remove(query, req.params.id);
      
        if(result){
            const msg = "crok supprimé";
            res.json(success(msg))
        }else throw Error("Catégorie non supprimée, probable erreur de syntaxe dans l'objet.");

    
    } catch (err) {
        throw Error(err);
    }
}


export const createCrok = async (req, res) => {
    try {
        const form = formidable({
            uploadDir: "public/img/crok",
            keepExtensions: true,
            allowEmptyFiles: false,
            maxFileSize: 5 * 1024 * 1024 * 1024, // 5Mb
            minFileSize: 10,
        });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Erreur lors de l'analyse du formulaire :", err);
                res.status(500).json(error("Erreur lors de l'analyse du formulaire"));
                return;
            }

            // Affiche les champs du formulaire
            console.log("Champs du formulaire :", fields);

            // Affiche les fichiers téléchargés
            console.log("Fichiers téléchargés :", files);

            // Votre code pour insérer les données dans la base de données
            const query = "INSERT INTO crok (title, img, description, prix) VALUES (?, ?, ?, ?)";
            const { title, img, description, prix } = fields;
            const dataQuery1 = {
                title,
                img: Object.keys(files).length === 0 ? "no-picture.jpg" : files.img.newFilename,
                description,
                prix,
            };

            // Insérez les données dans la base de données ici
            const [result] = await Query.write(query, [dataQuery1.title, dataQuery1.img, dataQuery1.description, dataQuery1.prix]);

            // Si l'insertion a réussi
            if (result) {
                const msg = "crok ajouté";
                res.status(201).json(success(msg, dataQuery1));
            } else {
                console.error("Erreur lors de l'insertion dans la base de données.");
                res.status(500).json(error("Erreur lors de l'insertion dans la base de données"));
            }
        });
    } catch (err) {
        console.error("Erreur générale :", err);
        res.status(500).json(error("Une erreur est survenue"));
    }
};
