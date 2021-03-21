
import app from './app';

app.set('PORT', 4000);

const res = app.listen(app.get('PORT'))
console.log(`server run on PORT: ${app.get('PORT')}`)

