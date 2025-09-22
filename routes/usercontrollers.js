exports.getuser = (req,res)=>{
    res.json ({name:"maryam", age :22})
}
exports.createuser = (req,res)=>{
    res.sen ("کاربر ایجاد شد ")
}

exports.updateuser = (req,res)=>{
    res.send("کاربر ویرایش شد ")
}

exports.deleteuser = (req,res)=>{
    res.send ("کاربر حذف شد ")
}
