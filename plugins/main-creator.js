
import PhoneNumber from 'awesome-phonenumber';

async function handler(m, { conn}) {
  let numcreador = '5215639557297';
  let ownerJid = numcreador + '@s.whatsapp.net';

  let name = await conn.getName(ownerJid) || 'Ash Developer';
  let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || '💻 Creadora del bot *Ash Bot 🔱* y amante del desarrollo.';
  let empresa = '✨ Software y Hosting ';
  let imagen = 'https://qu.ax/EebvE.jpeg';

  const caption = `
╔═══🔱 *INFORMACIÓN DEL CREADOR* 🔱═══╗
👩‍💻 *Nombre:* ${name}
📱 *Número:* wa.me/${numcreador}
📝 *Descripción:* ${about}
🏢 *Empresa:* ${empresa}
╚════════════════════════════════╝`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: imagen},
    caption: caption
}, { quoted: m});
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
