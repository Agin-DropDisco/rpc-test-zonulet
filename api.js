const Web3 = require('web3');
const fs = require('fs');
const web3 = new Web3('https://api.s0.t.hmny.io');


async function getNFTs() {

        var images = [];

        const abi = [{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"inputs":[{"type":"address","indexed":true,"name":"owner","internalType":"address"},{"name":"approved","internalType":"address","indexed":true,"type":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"name":"Approval","type":"event","anonymous":false},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","indexed":true,"internalType":"address","name":"owner"},{"type":"address","internalType":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}]},{"name":"Transfer","inputs":[{"type":"address","indexed":true,"internalType":"address","name":"from"},{"type":"address","name":"to","internalType":"address","indexed":true},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"type":"event","anonymous":false},{"type":"function","outputs":[],"stateMutability":"nonpayable","name":"approve","inputs":[{"name":"to","type":"address","internalType":"address"},{"type":"uint256","internalType":"uint256","name":"tokenId"}]},{"stateMutability":"view","inputs":[{"internalType":"address","type":"address","name":"owner"}],"outputs":[{"type":"uint256","internalType":"uint256","name":""}],"type":"function","name":"balanceOf"},{"type":"function","name":"categories","inputs":[{"type":"uint256","internalType":"uint256","name":""}],"stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}]},{"name":"getApproved","inputs":[{"type":"uint256","internalType":"uint256","name":"tokenId"}],"stateMutability":"view","type":"function","outputs":[{"type":"address","name":"","internalType":"address"}]},{"name":"imageData","type":"function","inputs":[{"type":"uint256","name":"","internalType":"uint256"}],"outputs":[{"name":"name","type":"string","internalType":"string"},{"internalType":"string","name":"mimeType","type":"string"},{"type":"string","name":"nftData","internalType":"string"},{"name":"category","type":"string","internalType":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","type":"string","name":"url"},{"name":"price","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"name":"images","inputs":[{"name":"","internalType":"uint256","type":"uint256"}],"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","type":"function"},{"stateMutability":"view","inputs":[{"type":"address","internalType":"address","name":"owner"},{"internalType":"address","name":"operator","type":"address"}],"outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function","name":"isApprovedForAll"},{"inputs":[{"name":"","internalType":"uint256","type":"uint256"}],"outputs":[{"internalType":"string","name":"","type":"string"}],"type":"function","stateMutability":"view","name":"mimetypes"},{"name":"name","outputs":[{"name":"","internalType":"string","type":"string"}],"type":"function","stateMutability":"view","inputs":[]},{"name":"ownerOf","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","internalType":"address","type":"address"}],"type":"function","stateMutability":"view"},{"type":"function","outputs":[],"inputs":[{"internalType":"address","name":"from","type":"address"},{"name":"to","internalType":"address","type":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}],"stateMutability":"nonpayable","name":"safeTransferFrom"},{"outputs":[],"type":"function","stateMutability":"nonpayable","name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"name":"to","internalType":"address","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"type":"bytes","internalType":"bytes","name":"_data"}]},{"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","internalType":"bool","name":"approved"}],"type":"function","stateMutability":"nonpayable","outputs":[]},{"stateMutability":"view","name":"supportsInterface","inputs":[{"type":"bytes4","internalType":"bytes4","name":"interfaceId"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"type":"function"},{"stateMutability":"view","outputs":[{"internalType":"string","name":"","type":"string"}],"inputs":[],"type":"function","name":"symbol"},{"inputs":[{"type":"uint256","internalType":"uint256","name":"index"}],"outputs":[{"type":"uint256","internalType":"uint256","name":""}],"type":"function","name":"tokenByIndex","stateMutability":"view"},{"name":"tokenOfOwnerByIndex","inputs":[{"internalType":"address","type":"address","name":"owner"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","outputs":[{"internalType":"uint256","type":"uint256","name":""}],"type":"function"},{"stateMutability":"view","outputs":[{"name":"","type":"string","internalType":"string"}],"inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}],"type":"function","name":"tokenURI"},{"name":"totalSupply","outputs":[{"type":"uint256","internalType":"uint256","name":""}],"type":"function","inputs":[],"stateMutability":"view"},{"inputs":[{"type":"address","internalType":"address","name":"from"},{"type":"address","internalType":"address","name":"to"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"type":"function","name":"transferFrom","outputs":[],"stateMutability":"nonpayable"},{"type":"function","inputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"string","internalType":"string","name":"_mimeType"},{"internalType":"string","type":"string","name":"_nftData"},{"type":"string","name":"_category","internalType":"string"},{"type":"string","internalType":"string","name":"_description"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"mint","stateMutability":"nonpayable","outputs":[{"internalType":"uint256","type":"uint256","name":""}]},{"name":"approveNFT","type":"function","stateMutability":"nonpayable","inputs":[{"name":"_to","type":"address","internalType":"address"},{"internalType":"uint256","type":"uint256","name":"_tokenId"}],"outputs":[]},{"type":"function","stateMutability":"nonpayable","name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"inputs":[{"name":"_address","type":"address","internalType":"address"},{"internalType":"uint256","type":"uint256","name":"_tokenId"}]},{"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"name":"_price","internalType":"uint256","type":"uint256"}],"outputs":[{"name":"","internalType":"bool","type":"bool"}],"name":"updatePrice"},{"name":"approveForSale","inputs":[{"name":"_to","type":"address","internalType":"address"},{"internalType":"uint256","type":"uint256","name":"_tokenId"},{"type":"uint256","name":"_price","internalType":"uint256"}],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"stateMutability":"nonpayable","outputs":[],"name":"approveForAuction","type":"function","inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","type":"uint256","name":"_tokenId"},{"internalType":"uint256","type":"uint256","name":"_price"},{"type":"uint256","name":"_time","internalType":"uint256"}]},{"stateMutability":"nonpayable","outputs":[],"type":"function","name":"nftSold","inputs":[{"type":"uint256","internalType":"uint256","name":"_tokenId"}]}];       
        const contract = new web3.eth.Contract(abi, "0x07aa05f3ff1EdF7219892f7590AA6B6985730A4B");
        // console.log(contract) nft base

        const totalSupply = await contract.methods.totalSupply().call();
        // console.log(totalSupply-1);
        const abilike = [{"inputs":[{"internalType":"contract ZonuletNFT","name":"_zonuletNFT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_liker","type":"address"}],"name":"LikedNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_pacmaniser","type":"address"}],"name":"PacmanedNFT","type":"event"},{"inputs":[],"name":"ZONU","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"likers","outputs":[{"internalType":"uint256","name":"totallikes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftLikes","outputs":[{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftPacmans","outputs":[{"internalType":"uint256","name":"pacmans","type":"uint256"},{"internalType":"uint256","name":"nftId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pacmanisers","outputs":[{"internalType":"uint256","name":"totalpacman","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"zonuletNFT","outputs":[{"internalType":"contract ZonuletNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"LikeNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"PacmanNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pacmanprice","type":"uint256"}],"name":"setPacmanPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPacmanPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];       
        const contractlike = new web3.eth.Contract(abilike, "0xB2870C7503cCD5476B429f6662a330fB525925b1");
        // Likes

        const abiblack = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"hashAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"blacklisted","type":"bool"}],"name":"SetBlackListedAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"nftID","type":"uint256"},{"indexed":false,"internalType":"bool","name":"blacklisted","type":"bool"}],"name":"SetBlackListedNFT","type":"event"},{"inputs":[],"name":"AddyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IDCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"blAddress","type":"address"}],"name":"getBlackListedAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nftID","type":"uint256"}],"name":"getBlackListedNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idupdates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addy","type":"address"},{"internalType":"bool","name":"blacklisted","type":"bool"}],"name":"setBlackListedAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"nftID","type":"uint256"},{"internalType":"bool","name":"blacklisted","type":"bool"}],"name":"setBlackListedNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"updates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];        
        const contractblack = new web3.eth.Contract(abiblack, "0xbE40C5586edFAB7D296d1BF0fBd8bB56Ca4436CC");
        // Blacklist 

        var notBL = 0;
        var removed = 0;

        console.log('Start Indexing the JSON Data');

        var total = totalSupply;

        console.log(total);
        // Load NFTs Data 
        for (var i = total; i--;) {
            const metadata = await contract.methods.imageData(i).call();
            const likecount = await contractlike.methods.nftLikes(i).call();
            const pacmancount = await contractlike.methods.nftPacmans(i).call();
            const blacklisted = await contractblack.methods.getBlackListedNFT(i).call();

            if (!blacklisted) {
                notBL++;
                images.push({ name: metadata.name, nftData: metadata.nftData, mimeType: metadata.mimeType, category: metadata.category, price: metadata.price, likecount: likecount.likes, pacmancount: pacmancount.pacmans, id: i});

                if (Number(notBL) == Number(total - removed)) {
                    console.log('Loaded all ' + notBL);
                    let data = JSON.stringify(images);
                    fs.writeFileSync('harmony.json', data);
                    console.log('Wrote Data to harmony.json');
                    getNFTs();
                }
            } else if (blacklisted == true) {
               removed++;
            }
        }

}

getNFTs();