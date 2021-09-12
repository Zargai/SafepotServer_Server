'use strict';

const loginId = "8tVXM7cxX8NF";
const transactionKey = "5w7M36w6G73v4Xsg";

const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;




//  exports.PaymentFunction = async (InputDTO) => {
//  PaymentFunction = async (InputDTO) => {
async function getMerchantDetails(InputDTO) {
        console.log("payment function hit")
    const { cc, cvv, expire, amount } = InputDTO;

    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(loginId);
    merchantAuthenticationType.setTransactionKey(transactionKey);
    
    var getRequest = new ApiContracts.GetMerchantDetailsRequest();
    getRequest.setMerchantAuthentication(merchantAuthenticationType);

    console.log(JSON.stringify(getRequest.getJSON(), null, 2));

    var ctrl = new ApiControllers.GetMerchantDetailsController(getRequest.getJSON());
     console.log("ctrl", ctrl);
    ctrl.execute(async function () {

        var apiResponse = ctrl.getResponse();
        
        var response =  await new ApiContracts.GetMerchantDetailsResponse(apiResponse);
       
        console.log(JSON.stringify(response, null, 2));

        if (response != null) {
            if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
                console.log('Merchant Name : ' + response.getMerchantName());
                console.log('Gateway Id : ' + response.getGatewayId());
                console.log('Processors : ');

                var processors = response.getProcessors().getProcessor();
                for (var i = 0; i < processors.length; i++) {
                    console.log("\t" + processors[i].getName());
                }

                console.log('Message Code : ' + response.getMessages().getMessage()[0].getCode());
                console.log('Message Text : ' + response.getMessages().getMessage()[0].getText());
                // return ({
                //     MessageCod :   response.getMessages().getMessage()[0].getCode(),
                //     MessageText :   response.getMessages().getMessage()[0].getText()
                // });
            }
            else {
                console.log('Result Code: ' + response.getMessages().getResultCode());
                console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
                // return ({
                //     ResultCode  : response.getMessages().getResultCode(),
                //     ErroCode  : response.getMessages().getMessage()[0].getCode(),
                //     Errormessage  : response.getMessages().getMessage()[0].getText()
                // });
            }
            console.log('*********Responce********');
            console.log(response);
            return { response };
        }
        else {
            console.log('Null Response.');
             return ({responce:'Null Response'});
            
            // return { response };
        }
        
         
    });
}

if (require.main === module) {
    getMerchantDetails(function () {
        console.log('getMerchantDetails call complete.');
    });
}

module.exports.getMerchantDetails = getMerchantDetails;
