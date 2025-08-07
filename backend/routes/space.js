import express from 'express';
import { spaceModel } from '../model/spaceModel.js'

const spaceRouter = express.Router();


// upload property details 
spaceRouter.post('/upload/propertyDetials/:ownerId', async (req, res)=>{
    const {owner, name, address, geo, contact} = req.body;
    try{
        const newProperty = await spaceModel.create({ owner, name, address, geo, contact });
        res.status(201).json({
            message: 'Property details uploaded successfully',
            space: { 
                id: newProperty._id,
                name: newProperty.name,
                address: newProperty.address,
                email: newProperty.contact.email
            }
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

// upload place details
spaceRouter.post('/upload/placeDetails/:propertyId', async (req,res)=>{
    const { propertyId } = req.params;
    const { floor, roomNumber, type, description, amenities, capacity, pricePerSeat, discountPercentage, images, availableDays, availableTimes, availability, isActive } = req.body;
    try{
        const selectedProperty = await spaceModel.findById(propertyId);
        if(!selectedProperty){
            return res.status(404).json({message: "Space not found"});
        }
        const newPlace = {
            floor,
            roomNumber,
            type,
            description,
            amenities,
            capacity,
            pricePerSeat,
            discountPercentage,
            images,
            availableDays,
            availableTimes,
            availability,
            isActive
        };
        selectedProperty.space.push(newPlace);
        await selectedProperty.save();
        res.status(201).json({
            message: 'Place details uploaded successfully',
            place: {
                id: newPlace._id,
                floor: newPlace.floor,
                roomNumber: newPlace.roomNumber,
                type: newPlace.type,
                description: newPlace.description,
                amenities: newPlace.amenities,
                capacity: newPlace.capacity,
                pricePerSeat: newPlace.pricePerSeat,
                discountPercentage: newPlace.discountPercentage,
                images: newPlace.images,
                availableDays: newPlace.availableDays,
                availableTimes: newPlace.availableTimes,
                availability: newPlace.availability,
                isActive: newPlace.isActive
            }
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
})
// update property details
spaceRouter.post('/update/propertyDetails/:propertyId', async (req, res)=>{
    const { propertyId } = req.params;
    const { name, address, geo, contact } = req.body;
    try{
        const updatedProperty = await spaceModel.findByIdAndUpdate(propertyId, { name, address, geo, contact }, { new: true });
        if(!updatedProperty){
            return res.status(404).json({message: "Property not found"});
        }
        res.status(200).json({
            message: 'Property details updated successfully',
            property: {
                id: updatedProperty._id,
                name: updatedProperty.name,
                address: updatedProperty.address,
                email: updatedProperty.contact.email
            }
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// update place details
spaceRouter.post('/update/placeDetails/:propertyId/:placeId', async (req, res)=>{
    const { propertyId, placeId } = req.params;
    const { floor, roomNumber, type, description, amenities, capacity, pricePerSeat, discountPercentage, images, availableDays, availableTimes, availability, isActive } = req.body;
    try{
        const updatedPlace = await spaceModel.findOneAndUpdate(
            { _id: propertyId, "space._id": placeId },
            { $set: { "space.$": { floor, roomNumber, type, description, amenities, capacity, pricePerSeat, discountPercentage, images, availableDays, availableTimes, availability, isActive } } },
            { new: true }
        );
        if(!updatedPlace){
            return res.status(404).json({message: "Place not found"});
        }
        res.status(200).json({
            message: 'Place details updated successfully',
            place: updatedPlace.space.find(place => place._id.toString() === placeId)
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// get property details
spaceRouter.get('/get/propertyDetails/:propertyId', async (req, res)=>{
    const { propertyId } = req.params;
    try{
        const propertyDetails = await spaceModel.findById(propertyId);
        if(!propertyDetails){
            return res.status(404).json({message: "Property not found"});
        }
        res.status(200).json({
            message: 'Property details retrieved successfully',
            property: {
                id: propertyDetails._id,
                name: propertyDetails.name,
                address: propertyDetails.address,
                email: propertyDetails.contact.email
            }
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// get place details
spaceRouter.get('/get/placeDetails/:propertyId/:placeId', async (req, res)=>{
    const { propertyId, placeId } = req.params;
    try{
        const placeDetails = await spaceModel.findOne(
            { _id: propertyId, "space._id": placeId },
            { "space.$": 1 }
        );
        if(!placeDetails){
            return res.status(404).json({message: "Place not found"});
        }
        const place = placeDetails.space[0];
        res.status(200).json({
            message: 'Place details retrieved successfully',
            place: {
                id: place._id,
                floor: place.floor,
                roomNumber: place.roomNumber,
                type: place.type,
                description: place.description,
                amenities: place.amenities,
                capacity: place.capacity,
                pricePerSeat: place.pricePerSeat,
                discountPercentage: place.discountPercentage,
                images: place.images,
                availableDays: place.availableDays,
                availableTimes: place.availableTimes,
                availability: place.availability,
                isActive: place.isActive
            }
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// delete property details
spaceRouter.delete('/delete/propertyDetails/:propertyId', async (req, res)=>{
    const { propertyId } = req.params;
    try{
        const deletedProperty = await spaceModel.findByIdAndDelete(propertyId);
        if(!deletedProperty){
            return res.status(404).json({message: "Property not found"});
        }
        res.status(200).json({message: "Property deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// delete place details
spaceRouter.delete('/delete/placeDetails/:propertyId/:placeId', async (req, res)=>{
    const { propertyId, placeId } = req.params;
    try{
        const updatedProperty = await spaceModel.findByIdAndUpdate( propertyId, { $pull: { space: { _id: placeId } } }, { new: true }
        );
        if(!updatedProperty){
            return res.status(404).json({message: "Place not found"});
        }
        res.status(200).json({message: "Place deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// get all property details
spaceRouter.get('/get/allPropertyDetails', async (req, res)=>{
    try{
        const propertyDetails = await spaceModel.find({});
        if(!propertyDetails){
            return res.status(404).json({message: "Property not found"});
        }
        res.status(200).json({
            message: 'All spaces details retrieved successfully',
            spaces: propertyDetails
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
// get all places details
spaceRouter.get('/get/allPlacesDetails', async (req, res)=>{
    try{
        const property = await spaceModel.findById({});
        if(!property){
            return res.status(404).json({message: "Property not found"});
        }
        res.status(200).json({
            message: 'All places details retrieved successfully',
            places: property.space
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
});


export default spaceRouter;