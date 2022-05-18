const workingTime = (req,res,next) => {
    const date = new Date ();
    req.date = date ;
    const hours = date.getHours ();
    const days = date.getUTCDate (); 
    if (hours < 01 || hours > 23 && days > 5 ) {
      return  res.send ('<h1> msaker ! arjaa ghodwa nekhdmou mel 9h lel 21h </h1>');
    } else {
        next ();
    }
    }
    module.exports = {workingTime};