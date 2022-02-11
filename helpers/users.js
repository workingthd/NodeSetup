






const formateData = (data) => {
    data.dob = new Date(data.dob);
    return data;
};

module.exports = {
    formateData

};