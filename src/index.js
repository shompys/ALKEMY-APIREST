
import app from './app';


app.set('PORT', process.env.PORT || 4000);
  
const res = app.listen(app.get('port'))
console.log(`server run on PORT: ${app.set('PORT')}`)
