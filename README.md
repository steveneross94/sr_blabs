# Coffee Credit Card Roulette

## Hosted Site

This application is currently hosted on [netlify](https://main--sr-blabs-preview.netlify.app/) but can run locally using the instructions below. Styled mobile-first, this is meant to be accessed on your phone, though it is responsive enough to be used on a larger screen.

## Getting Started Locally

First, install relevant dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions & Notes

As an avid San Francisco 49ers fan (and to avoid alienating any employees that were not explicitly mentioned), the names here are a few current players on the team. All of the users start with their favorite coffees pre-selected, so there's no data to populate outside of what is already there. Users can select an alternative option from the dropdowns in the Menu section, as well.

At the start, we look at the average cost of all of the orders and check that against the most expensive orders in the list. Theoretically, the user(s) with the most expensive order will be higher than the average, and therefore will be required to pay for the order. In the event that there is more than 1 user with the most expensive order (i.e. 2 or more users have ordered a frappucino for $4), then we'll pick one of the users at random in that scenario - leaving it up to fate.

Once a user has paid during a current cycle they are removed from the roulette pool. This will ultimately bring the average cost higher, and when that cost exceeds the most expensive drink on the menu, we check the user's order against the lowest cost item on the menu to collect the pool of the most expensive orders.

We look at each wave of orders as cycles. A cycle will completely once all users have paid for an order once, and then the slate is wiped clean.
