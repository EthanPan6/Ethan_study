module.exports = {
    compile(template) {
        //转换template中的{{key}}
        //希望输出${key}
        template = template.replace(/\{\{(.+)}\}/g, () => {
            console.log(arguments);
            let key = arguments[1].trim()
            return '${' + key + '}'
        })
        const body = "let str='';with(obj){ str+=`" + template + "`} return str"
        console.log(body);
        return new Function('obj', body)
        /*
                let str='';
                with(obj){
                    str+=`${key}`
                }
                return str
            */
    }
}