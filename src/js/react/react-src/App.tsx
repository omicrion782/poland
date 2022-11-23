
import { Offer } from "../components/offer";
import { ViewOffer } from "../components/viewOffer";

import { IOffer } from "../models";
import { getOffers } from "../hooks/getOffers";
import React, {useState} from 'react'


function App() {

const [viewOffer, setViewOffer] = useState<IOffer>()

const openOfferViewHandler = (item: IOffer, closed: Boolean) => {
  if (closed) {
    setViewOffer(item)
  } else {
    setViewOffer(undefined)
  }
}

const {offers} = getOffers()


  return (
  <>
    <div className="grid grid-cols-3 gap-8">
      {offers.map(item => <Offer offer = {item} key={item.id} onOffer={openOfferViewHandler}/>)}
    </div>

    {viewOffer && <ViewOffer item={viewOffer} onOffer={openOfferViewHandler}/>}

  </>
  )
}
export default App;
