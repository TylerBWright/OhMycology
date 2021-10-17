source .env
npm run build
scp -r ./build/* $SERVER_USER:/var/www/html/