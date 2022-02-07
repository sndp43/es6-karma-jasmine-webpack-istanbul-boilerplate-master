 const sayHi = () => {
    console.log('should log hi');
    LogMsg("should log hi");
    return "hi";
};
 const LogMsg = (msgTolog) => {
    console.log("logging msg to file - "+msgTolog);
    return "logged";
};
export {sayHi,LogMsg}
