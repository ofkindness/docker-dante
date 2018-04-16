require('dotenv').load({ silent: true });

console.log(
`debug: ${process.env.debug || 0}

internal: ${process.env.internal || '0.0.0.0'}  port = ${process.env.port || '1080'}
external: ${process.env.external || 'eth0'}

clientmethod: ${process.env.clientmethod || 'none'}
socksmethod: ${process.env.socksmethod || 'username'}

user.privileged: ${process.env['user.privileged'] || 'root'}
user.notprivileged: ${process.env['user.notprivileged'] || 'nobody'}

client pass {
    from: 0.0.0.0/0 port 1-65535 to: 0.0.0.0/0
    log: error
}

socks pass {
    from: 0.0.0.0/0 to: 0.0.0.0/0
    log: error
    protocol: tcp udp
    socksmethod: ${process.env.socksmethod || 'username'}
}`
);
