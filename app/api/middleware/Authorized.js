'use strict';

const loginId = "8tVXM7cxX8NF";
const transactionKey = "5w7M36w6G73v4Xsg";

const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;




//  exports.PaymentFunction = async (InputDTO) => {
//  PaymentFunction = async (InputDTO) => {
exports.getMerchantDetails = async (InputDTO, callback)=> {
    const { cc, cvv, expire, amount } = InputDTO;

    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(loginId);
    merchantAuthenticationType.setTransactionKey(transactionKey);

    const creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(cc);
    creditCard.setExpirationDate(expire);
    creditCard.setCardCode(cvv);

    const paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    const transactionSetting = new ApiContracts.SettingType();
    transactionSetting.setSettingName('recurringBilling');
    transactionSetting.setSettingValue('false');

    const transactionSettingList = [];
    transactionSettingList.push(transactionSetting);

    const transactionSettings = new ApiContracts.ArrayOfSetting();
    transactionSettings.setSetting(transactionSettingList);

    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(amount);
    transactionRequestType.setTransactionSettings(transactionSettings);

    const createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);

    const ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    const finalresp = "";
    ctrl.execute(() => {
        const apiResponse = ctrl.getResponse();
        const response = new ApiContracts.CreateTransactionResponse(apiResponse);

        if (response !== null) {
            if (response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
                if (response.getTransactionResponse().getMessages() !== null) {
                    callback({ success: 'Transaction was successful.' });
                } else {
                    if (response.getTransactionResponse().getErrors() !== null) {
                        let code = response.getTransactionResponse().getErrors().getError()[0].getErrorCode();
                        let text = response.getTransactionResponse().getErrors().getError()[0].getErrorText();
                        callback({
                            error: `${code}: ${text}`
                        });
                    } else {
                        callback({ error: 'Transaction failed.' });
                    }
                }
            } else {
                if (response.getTransactionResponse() !== null && response.getTransactionResponse().getErrors() !== null) {
                    let code = response.getTransactionResponse().getErrors().getError()[0].getErrorCode();
                    let text = response.getTransactionResponse().getErrors().getError()[0].getErrorText();
                    callback({
                        error: `${code}: ${text}`
                    });
                } else {
                    let code = response.getMessages().getMessage()[0].getCode();
                    let text = response.getMessages().getMessage()[0].getText();
                    callback({
                        error: `${code}: ${text}`
                    });
                }
            }

        } else {
            callback({ error: 'No response.' });
        }
    });
   //return ctrl;
}

if (require.main === module) {
    getMerchantDetails(function () {
        console.log('getMerchantDetails call complete.');
    });
}

// module.exports.getMerchantDetails = getMerchantDetails;
