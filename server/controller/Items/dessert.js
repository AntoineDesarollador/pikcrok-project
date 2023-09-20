


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

export const allDessert = async (req, res) => {
    try {
        // const query = "SELECT * FROM tea";
        const query = "SELECT title, img, description FROM dessert";
        const [dessert] = await Query.find(query);
        if(dessert.length){
            const msg = "Récupération de toutes les desserts";
            res.status(200).json(success(msg, dessert));
        } else {
            const msg = "Pas encore de dessert en BDD";
            res.status(200).json(success(msg));
        }
    } catch (err) {
        throw Error(err);
    }
}


export const one = async (req, res) => {
    try {
        const queryDessert = "SELECT * FROM dessert WHERE id = ?";
      

        const dessert = await Query.findByValue(queryDessert, req.params.id);
      
        
        const finalDessert = {...dessert[0]}; // regroupe les données dans un même objet

        if(!dessert.length){
            const msg = "Cette dessert n'existe pas en BDD";
            res.status(200).json(success(msg));
        } else {
            const msg = "Récupération de " + finalDessert.title;
            res.status(200).json(success(msg, finalDessert));
        }
    } catch (err) {
        throw Error(err);
    }
}


export const update = async (req, res) => {
    try {
        const query = "UPDATE dessert SET title= ?, description= ?, img= ? WHERE id= ?"
        const [result] = await Query.write(query, req.body)

        const id = req.params.id
        const dessertUpdated = {...req.body, id}

        if(result){
            const msg = "Catégorie modifiée.";
            res.json(success(msg, dessertUpdated));

        } else throw Error("Catégorie non modifiée, probable erreur de syntaxe dans l'objet.");
        
    } catch (err) {
        throw Error(err);
    }
}


export const removeDessert  = async (req,res) => {
    try {
        const query = "DELETE FROM dessert  WHERE id=?"

        const result = await Query.remove(query, req.params.id);
      
        if(result){
            const msg = "Dessert supprimé";
            res.json(success(msg))
        }else throw Error("Catégorie non supprimée, probable erreur de syntaxe dans l'objet.");

    
    } catch (err) {
        throw Error(err);
    }
}

export const createDessert = async (req,res) => {

    try {


        const form = formidable({
            uploadDir: "public/img/dessert",
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

        const query = "INSERT INTO dessert (title, img, description) VALUES (?, ?, ?)";
    const [result] = await Query.write(query, dataQuery1);

   
    const dessertCreated = { ...req.body, ...{ created: new Date()}}

 
    if(result){
                
        const msg = "dessert ajouté";
        res.json(success(msg, drinkCreated))
    }else throw Error("Catégorie non supprimée, probable erreur de syntaxe dans l'objet.");
        
});

} catch (err) {
        throw Error(err);
    }
};
