const { mongoose } = require(".");

module.exports = mongoose => {
    const Portefeuille = mongoose.model(
        'portefeuille',
        mongoose.Schema(
            {
                naam: String, 
                description: String,
                published: Boolean
            },
            {
                timestamps: true
            }
        )
    );

    return Portefeuille;
}