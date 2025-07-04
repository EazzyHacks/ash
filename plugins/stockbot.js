let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.setprecios) {
        let precios = chat.setprecios;
        await conn.reply(m.chat, precios, m);
    } else {
        m.reply(`> Actualiza Tu Lista De Precios Con .setstock1`);
    }
}
handler.command = ['stock1'];
handler.help = ["stock1"];
handler.tags = ["venta"];
handler.group = true;
handler.admin = true;
handler.botAdmin = false;

export default handler;
