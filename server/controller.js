getListings = (req,res) => {
    const db = req.app.get('db')
    db.getListings()
    .then((response) => {
        console.log(response);
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).json({errMessage: 'Listings not received'})
        console.log(err);
    })
}

changeListing = (req,res) => {
    console.log(req.body)
    const {name,address,city,state,zip,img,mortgage,rent} = req.body
    const db = req.app.get('db')
    db.changeListing([req.params.id,name,address,city,state,zip,mortgage,rent])
    .then((response) => {
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).json({errMessage: 'Listing not changed'})
        console.log(err);
    })
}

removeListing = (req,res) => {
    const db = req.app.get('db')
    db.removeListing(req.params.id)
    .then(response => {
        res.status(200).json(repsonse)})
    .catch(err => {
        res.status(500).json({errMessage: 'Listing didnt delete'})
        console.log(err);
    })
}

addListing = (req,res) => {
    const {name,address,city,state,zip,img,mortgage,rent} = req.body
    const db = req.app.get('db')
    db.addListing([name,address,city,state,zip,img,mortgage,rent])
    .then(response => {
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).json({errMessage: 'Listing wasnt added'})
        console.log(err);
    })
}

module.exports = {
    getListings,
    changeListing,
    removeListing,
    addListing
}