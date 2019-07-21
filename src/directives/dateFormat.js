const dateFormatter = (value, formatter = 'YYYY-mm-dd HH:mm:ss') => {
    const addPreZero = (value) => {
        return (parseInt(value, 10) < 10 ? ('0' + value) : value);
    };
    const doFormatter = ((formatter) => {
        if(formatter.length !== 19){
          throw new Error('formatter is not available.');
        }
        const s = [];
        s.push(formatter[4]);
        s.push(formatter[7]);
        s.push(formatter[10]);
        s.push(formatter[13]);
        s.push(formatter[16]);
        return s;
    })(formatter);

    if(value){
        const d = new Date(value);
        const year    = d.getFullYear();
        const month   = addPreZero(d.getMonth() + 1);
        const date    = addPreZero(d.getDate());
        const hours   = addPreZero(d.getHours());
        const minutes = addPreZero(d.getMinutes());
        const seconds = addPreZero(d.getSeconds());
        return year + doFormatter[0] + month + doFormatter[1] + date + doFormatter[2] +
          hours + doFormatter[3] + minutes + doFormatter[4] + seconds;
    } else {
        return value;
    }
};
export default {
    name: 'dateformat',
    binding: {
        bind(el, {value}) {
           if(el.nodeName === 'INPUT'){
             el.value = dateFormatter(el.value, value);
           }
           console.log('bind');
        },
        componentUpdated(el, {value}) {
          if(el.nodeName === 'INPUT'){
            el.value = dateFormatter(el.value, value);
          }
          console.log('componentUpdated');
        },
        inserted() {
            console.log('inserted');
        },
        update() {
          console.log('update');
        },
        unbind() {
          console.log('unbind');
        },
    },
}
