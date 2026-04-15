const localtunnel = require('localtunnel');

const PORT = Number(process.env.PORT || 4173);

async function main() {
  const tunnel = await localtunnel({ port: PORT });
  console.log(`Public URL: ${tunnel.url}`);
  console.log('Tunnel is active. Press Ctrl+C to stop.');

  const close = () => {
    tunnel.close();
    process.exit(0);
  };

  process.on('SIGINT', close);
  process.on('SIGTERM', close);
}

main().catch((error) => {
  console.error('Failed to open tunnel:', error.message);
  process.exit(1);
});
