HH.Util ={
	getParams: function(s){
		a = s.match(/[^&?=]*=[^&?=]*/g);
		r = {};
		
		if(!a) {
			return r;
		}
		
		for (i=0; i<a.length; i++) {
			r[a[i].match(/[^&?=]*/)[0]] = a[i].match(/=([^&?]*)/)[0].replace('=', '');
		}
		return r;
	}
};
