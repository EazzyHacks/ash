let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setprecios = text
        conn.reply(m.chat, '> Tu Lista a Sido Actualizada Correctamente Pon .precios Para Ver La Lista 🥖', m)
    } else throw `> Para Actualizar Tu Lista Debes Poner Lo Siguiente .setstock1 + Tu Lista\n> Ejemplo :\n.setstock2 1 bot = 5soles`
}

handler.command = ['setstock2']
handler.group = true;
handler.admin = true;
handler.botAdmin = false;
export default handler
