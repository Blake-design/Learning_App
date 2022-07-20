/// this function take the subscription payload and adds it to the prev query cache
const addToPrev = (prev: any, { subscriptionData }: any) => {
  const newConvo = subscriptionData.data.convo;

  console.log(prev.convos);
  if (!prev.convos.includes(newConvo._id)) {
    console.log(newConvo);
    const updatedConvos = Object.assign(
      {},
      {
        convos: [...prev.convos, newConvo],
      }
    );
    return updatedConvos;
  }
};

const removeFromPrev = (prev: any, { subscriptionData }: any) => {
  const deletedConvo = subscriptionData.data.convo;

  const filteredConvos = prev.convos.filter(
    (convo: any) => convo._id !== deletedConvo._id
  );

  const updatedConvos = Object.assign(
    {},
    {
      convos: [...filteredConvos],
    }
  );
  console.log(updatedConvos);
  return updatedConvos;
};

/// this function delegates which function to use based off action
export const doSubscriptionAction = (prev: any, { subscriptionData }: any) => {
  if (subscriptionData.data.convo.action === "create") {
    return addToPrev(prev, { subscriptionData });
  }
  if (subscriptionData.data.convo.action === "delete") {
    return removeFromPrev(prev, { subscriptionData });
  }
};
