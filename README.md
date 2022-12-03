# Huddle (Decentralized Pinterest)

Huddle is a decentralized social media and image sharing platform like pinterest / unsplash where users can find and share ideas to spark inspiration, and interact with a community of like minded people.

## Problem
- In Nov 29, Pinterest shutdown it's creators rewards program that was meant to enable fans support their favorite creators with tips. Thousands of creators that were earning with the programme now have no way of receiving donations.

## Our Solution
- With Huddle, Creators can receive tips from fans of their content directly to their wallet without any secondary intermediary. This reduces the level of trust, responsibility and dependency on a centralized entity.

## Tech Stack
- React (Next.js) & TailwindCSS for the frontend
- NFT.storage for pinning creator images and it's JSON metadata to IPFS
- Alchemy NFT API for getting NFTs minted by users
- RainbowKit / Wagmi for authenticating users and getting wallet balance and address
- Polygon Mumbai Testnet for deployment of smart contracts powering the Dapp
- Solidity for the smart contracts
- Ethers.js & Hardhat for testing & deploying smart contracts

## Verified Smart Contracts Links (Polygon Mumbai)
- Huddle: https://mumbai.polygonscan.com/address/0x9EA38BFCC3c3b4E3C1a8FC1d861D05c11Fb49a14
- Huddle Tips: https://mumbai.polygonscan.com/address/0x5031c474Bbea0c5aced442BC250533fb02b66482
- Huddle Comments: https://mumbai.polygonscan.com/address/0x6f9798263B48C42a322cF19363EA1B8B3b2b0824

## User Interface
### Home Page
- This is the landing page of the app. All the different posts made by different creators are directly populated from IPFS to the user.

![homepage](https://user-images.githubusercontent.com/42726051/205458942-adf0d2ae-245b-4eef-8043-1d433a4ac4ae.JPG)

### Post Detail Page
- Here, the users can see more details about a specific post 

![post details page](https://user-images.githubusercontent.com/42726051/205459500-69f03100-5b43-4398-9c5d-076eea6de5c4.JPG)
- Users can add comments under a specific post and interact with other members of the community

![comments](https://user-images.githubusercontent.com/42726051/205459881-ca0b983b-8b14-461d-9fef-9abede1a821f.JPG)

- Users can choose to mint a post as NFT to their profile by clicking the mint button, just like how pins work on Pinterest
  
  ![minted nft](https://user-images.githubusercontent.com/42726051/205459991-9d1c50d9-20fb-4f5b-992b-7f43c89dcd63.JPG)

- Users can directly send a tip to the post creator's wallet

![send tip](https://user-images.githubusercontent.com/42726051/205460101-1dacf0a2-5955-4bd6-927e-bef94eb3a02b.JPG)

![tip sent](https://user-images.githubusercontent.com/42726051/205460108-9d7f5edc-3276-4a58-b6e8-603fe48cb2ff.JPG)

## Profile Page
- User Details

![profilepage](https://user-images.githubusercontent.com/42726051/205460397-6e5f7374-6592-46c5-8db8-5a3258a900a6.JPG)


- This uses the Alchemy NFT API to fetch the NFTs owned by a user's connected wallet, along with it's tokenID and contract address

![my-nfts](https://user-images.githubusercontent.com/42726051/205460373-71d803ef-6f83-4d61-bd88-13c10698c77f.JPG)

## Transactions Page




