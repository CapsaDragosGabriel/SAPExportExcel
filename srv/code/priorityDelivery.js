/**
 * 
 * @On(event = { "delayProductDeliveryDate" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/


module.exports = async function(req,srv) {
    // Accessing request parameters
	
		const itemID = req.params[0].ID;
		const prio= req.data.priority;


		console.log("item ID: "+itemID);
		console.log("prio: "+prio);
		await srv.update('SrvProjection',{ID:itemID}).with({Priority:prio});


	
	/*
	const { SrvProjection} = request;
	console.log("srv proj id: "+ itemID);
    // Accessing request body
    const prio = request.data['delay'];

	console.log("srv proj delay: "+ delay);

	await cds.connect.to("SrvProjection");
	let query= 'SELECT * WHERE ID=${itemID}';
	let books = await cds.db.run (query)

	const item = await SrvProjection.findOne({ ID: itemID });

	if (!item) {
		throw new Error(`Item with ID ${itemID} not found`);
	}


	 // Modify the item properties as needed
	 item.Priority = prio;

	 // Save the changes to the database
	 await item.save();

	console.log(itemID);
	console.log(prio);


	return { success: true, message: `Item with ID ${itemID} updated successfully` };
    } catch (error) {
        // Handle errors
        console.error('Error updating item:', error);
        return { success: false, error: error.message };
    }*/

}