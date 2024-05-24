const playlistModel = require('../models/playlistModel');

function enviarPlaylistParaBanco(req, res) {

    const { nomePlaylist } = req.body;

    if (nomePlaylist === undefined) {
        return res.status(400).send("O nome da playlist está undefined!");
    }


    playlistModel.adicionarPlaylist(nomePlaylist)
        .then(data => {
            console.log('Playlist enviada com sucesso:', data);
            res.json({ message: 'Playlist enviada com sucesso!' });
        })
        .catch(error => {
            console.error('Erro ao enviar a playlist:', error);
            res.status(500).json({ error: 'Erro ao enviar a playlist' });
        });
}

module.exports = {
    enviarPlaylistParaBanco
};
