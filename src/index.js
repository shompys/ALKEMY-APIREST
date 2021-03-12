
import app from './app';

app.set('PORT', process.env.SERVER_PORT);

const res = app.listen(app.get('PORT'))
console.log(`server run on PORT: ${app.get('PORT')}`)

