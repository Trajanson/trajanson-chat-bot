import * as builder from "botbuilder";

const urlTaylor22InPool = "https://media.giphy.com/media/l2ZDM3ZInkt6epPeU/giphy.gif";
const urlTaylorShakeItOffWoops = "https://media.giphy.com/media/4RdqxoInbY00g/giphy.gif";
const urlTaylorLaughing = "https://media.giphy.com/media/gmzAFZm6rtGGA/giphy.gif";
const urlTaylorSayingImPrettyAwesome = "https://media.giphy.com/media/x1X4A6vJKltOo/giphy.gif";
const urlTaylorMean = "https://media.giphy.com/media/QpNO7V3rLU0ZG/giphy.gif";
const urlTaylorExcited = "https://media.giphy.com/media/TeQN3qzYS6LfO/giphy.gif";
const urlTaylorFireworks = "https://media.giphy.com/media/l4eWhutHkI4Ok/giphy.gif";
const urlTaylorDancing = "https://media.giphy.com/media/NKfQIDAYX2R2g/giphy.gif";

const urlTaylorHuggingEverythingHasChanged = "https://media.giphy.com/media/3ohzUrGh6nJvSxKWB2/giphy.gif";
const urlTaylorWoahSurprised = "https://media.giphy.com/media/rHEPIdoMxQ688/giphy.gif";
const urlTaylorAbsolutelyEpic = "https://media.giphy.com/media/vax0FEmMPGaTC/giphy.gif";
const urlTaylorSurprisedHi = "https://media.giphy.com/media/WfoiunpYxKEuY/giphy.gif";
const urlTaylorBamHi = "https://media.giphy.com/media/SKdhLM2LBdbX2/giphy.gif";

const urlTaylorRawr = "https://media.giphy.com/media/t5S8tupca2Lks/giphy.gif";
const urlTaylorCrying = "https://media.giphy.com/media/ZlPzAuI0Oj3Tq/giphy.gif";

const urlTaylorAdorableHi = "https://media.giphy.com/media/YF1pE6d3JJIkM/giphy.gif";
const urlTaylorStoryOfUsShyHi = "https://media.giphy.com/media/MNLPEGK9f687e/giphy.gif";
const urlTaylorValentinesDayExcitedHi = "https://media.giphy.com/media/xzrjqj5C1TQAw/giphy.gif";

const urlTaylorExcitedHairFlip = "https://media.giphy.com/media/UFx8zwtnUw88g/giphy.gif";

const urlTaylorOursBye = "https://media.giphy.com/media/xT0Cyh7XG4Z3eSHRzG/giphy.gif";

const urlTaylorWantsGoodLuck = "https://media.giphy.com/media/wzGvwnSRkd0s0/giphy.gif";

const urlTaylorBeingRidiculous = "https://media.giphy.com/media/Z2CyIcbhJjTOM/giphy.gif";

const getTaylorCard = (urlTaylorGIF: string) => (
    new builder.AnimationCard()
    .image(builder.CardImage.create(undefined, urlTaylorGIF))
    .media([{
      url: urlTaylorGIF,
      profile: "1",
    }])
);

export const getTaylorInPoolCard = () => getTaylorCard(urlTaylor22InPool);

export const getTaylorAdorableHiCard = () => getTaylorCard(urlTaylorAdorableHi);

export const getTaylorExcitedCard = () => getTaylorCard(urlTaylorExcited);