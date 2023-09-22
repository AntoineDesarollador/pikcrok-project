


export const createCrok = async (req,res) => {
  try {
      const query = "INSERT INTO crok (title, img, description, prix) VALUES (?, ?, ?, ?)";
      const [result] = await Query.write(query, req.body);

      if(result.affectedRows){
          const msg = "Crok ajoutée.";
          res.json(success(msg, query));
      } else throw Error("Crok non ajoutée, probable erreur de syntaxe dans l'objet.");

  } catch (err) {
      throw Error(err);
  }
}