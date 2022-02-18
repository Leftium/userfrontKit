import jwt from 'jsonwebtoken'

// Decode public key saved as base64 in .env
const USERFRONT_PUBLIC_KEY = Buffer.from(import.meta.env.VITE_USERFRONT_PUBLIC_KEY, 'base64');

export async function get({ request }) {
    let status = 418;

    // Read the JWT access token from the request header
    const authHeader = request.headers.get('authorization');
    const token = authHeader && authHeader.split(" ")[1];

    let output = { token };
    jwt.verify(token, USERFRONT_PUBLIC_KEY, (err, auth) => {
        if(err) {
            status = 403;
            output.err = err;
        } else {
            status = 200;
            output.auth = auth;
        }
    });

    if (token == null) status = 401; // Return 401 if no token

    return {
		status: status,
        body: output
	};
}