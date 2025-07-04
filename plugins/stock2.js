let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setprecios) {
        let precios = chat.setprecios;
        await conn.reply(m.chat, precios, m);
    } else {
        m.reply(`> Actualiza Tu Lista De Precios Con .setstock2`);
    }
}
handler.command = ['stock2'];
handler.help = ["stock2 < Stock Seguidores >"];
handler.tags = ["venta"];
handler.group = true;
handler.botAdmin = false;

export default handler;
