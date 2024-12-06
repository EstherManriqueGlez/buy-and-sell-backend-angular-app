import { addViewToListingRoute } from "./addViewToListings";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { updateListingRoute } from "./updateListings";

export default [
  addViewToListingRoute,
  createNewListingRoute, 
  deleteListingRoute,
  getAllListingsRoute,
  getListingRoute,
  getUserListingsRoute,
  updateListingRoute,
]