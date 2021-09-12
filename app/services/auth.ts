import { Service, Inject } from "typedi";
import argon2 from "argon2";
import { IUser, IUserInput } from "../interfaces/users/IUser";
import jwt from "jsonwebtoken";
//Payment integtraion
import ApiContracts from "authorizenet";

@Service()
export default class AuthService {
  constructor(@Inject("userModel") private userModel: Models.UserModel) {}
  //for user signup
  public async SignUp(
    userInputDTO: IUserInput
  ): Promise<{ userRecord: IUser }> {
    const { email } = userInputDTO;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      const { email, password, name, image } = userInputDTO;
      const hashedPassword = await argon2.hash(password);
      const userRecord = await this.userModel.create({
        email: email,
        password: hashedPassword,
        name: name,
        image: image || "",
      });
      if (!userRecord) {
        throw new Error("User cannot be created");
      }

      return { userRecord };
    } else {
      throw new Error(`user with ${email} already exist`);
    }
  }

  //for user signin
  public async SignIn(
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string }> {
    const userRecord = await this.userModel.findOne({ email });
    // console.log("user record",userRecord)
    if (!userRecord) {
      throw new Error("User not registered");
    }
    const validPassword = await argon2.verify(userRecord.password, password);
    if (validPassword) {
      const user = userRecord.toObject();
      const token = this.generateToken(user);
      console.log("Token generated :", token);
      return { user, token };
    } else {
      throw new Error("Invalid Password");
    }
  }

  //for deletion user account
  public async deleteuser(systemId: string): Promise<{ success: boolean }> {
    try {
      const userRecord = await this.userModel.deleteOne({ systemId: systemId });
      console.log("delete user", userRecord);
      if (userRecord.deletedCount == 0) {
        return { success: false };
      }
      return { success: true };
    } catch (e) {
      console.log("error", e);
    }
  }

  //to update
  public async updateuser(
    systemId: string,
    userInputDTO: IUserInput
  ): Promise<{ message: string; success: boolean }> {
    try {
      const UserRecord = await this.userModel.updateOne(
        { systemId: systemId },
        { ...userInputDTO }
      );
      if (UserRecord.nModified <= 0) {
        return { message: "No Modification", success: false };
      }
      return { message: "user Updated", success: true };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  //getallusers
  public async getusers(): Promise<{ userRecord: Array<IUser> }> {
    try {
      const userRecord = await this.userModel.find();
      if (!userRecord) {
        throw new Error("No user found!");
      }
      console.log("****users Found***");
      console.log(userRecord);
      return { userRecord };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  //get single user
  public async getuser(systemId: string): Promise<{ userRecord: IUser }> {
    try {
      const userRecord = await this.userModel.findOne({ systemId: systemId });
      if (!userRecord) {
        throw new Error("No user found!");
      }
      console.log("****user Found****");
      console.log(userRecord);
      return { userRecord };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  //Generating JWT Token
  private generateToken(user) {
    return jwt.sign({ _id: user._id }, "jwt-token", { expiresIn: "1h" });
  }
  //Payment Function
  public async Payment(): Promise<{ data: String }> {
    try {
      var merchantAuthenticationType =
        new ApiContracts.MerchantAuthenticationType();
      merchantAuthenticationType.setName("5KP3u95bQpv");
      merchantAuthenticationType.setTransactionKey("346HZ32z3fP4hTG2");

      var creditCard = new ApiContracts.CreditCardType();
      creditCard.setCardNumber("4242424242424242");
      creditCard.setExpirationDate("0822");
      creditCard.setCardCode("999");

      var paymentType = new ApiContracts.PaymentType();
      paymentType.setCreditCard(creditCard);

      var orderDetails = new ApiContracts.OrderType();
      orderDetails.setInvoiceNumber("INV-12345");
      orderDetails.setDescription("Product Description");

      var tax = new ApiContracts.ExtendedAmountType();
      tax.setAmount("4.26");
      tax.setName("level2 tax name");
      tax.setDescription("level2 tax");

      var duty = new ApiContracts.ExtendedAmountType();
      duty.setAmount("8.55");
      duty.setName("duty name");
      duty.setDescription("duty description");

      var shipping = new ApiContracts.ExtendedAmountType();
      shipping.setAmount("8.55");
      shipping.setName("shipping name");
      shipping.setDescription("shipping description");

      var billTo = new ApiContracts.CustomerAddressType();
      billTo.setFirstName("Ellen");
      billTo.setLastName("Johnson");
      billTo.setCompany("Souveniropolis");
      billTo.setAddress("14 Main Street");
      billTo.setCity("Pecan Springs");
      billTo.setState("TX");
      billTo.setZip("44628");
      billTo.setCountry("USA");

      var shipTo = new ApiContracts.CustomerAddressType();
      shipTo.setFirstName("China");
      shipTo.setLastName("Bayles");
      shipTo.setCompany("Thyme for Tea");
      shipTo.setAddress("12 Main Street");
      shipTo.setCity("Pecan Springs");
      shipTo.setState("TX");
      shipTo.setZip("44628");
      shipTo.setCountry("USA");

      var lineItem_id1 = new ApiContracts.LineItemType();
      lineItem_id1.setItemId("1");
      lineItem_id1.setName("vase");
      lineItem_id1.setDescription("cannes logo");
      lineItem_id1.setQuantity("18");
      lineItem_id1.setUnitPrice(45.0);

      var lineItem_id2 = new ApiContracts.LineItemType();
      lineItem_id2.setItemId("2");
      lineItem_id2.setName("vase2");
      lineItem_id2.setDescription("cannes logo2");
      lineItem_id2.setQuantity("28");
      lineItem_id2.setUnitPrice("25.00");

      var lineItemList = [];
      lineItemList.push(lineItem_id1);
      lineItemList.push(lineItem_id2);

      var lineItems = new ApiContracts.ArrayOfLineItem();
      lineItems.setLineItem(lineItemList);

      var userField_a = new ApiContracts.UserField();
      userField_a.setName("A");
      userField_a.setValue("Aval");

      var userField_b = new ApiContracts.UserField();
      userField_b.setName("B");
      userField_b.setValue("Bval");

      var userFieldList = [];
      userFieldList.push(userField_a);
      userFieldList.push(userField_b);

      var userFields = new ApiContracts.TransactionRequestType.UserFields();
      userFields.setUserField(userFieldList);

      var transactionSetting1 = new ApiContracts.SettingType();
      transactionSetting1.setSettingName("duplicateWindow");
      transactionSetting1.setSettingValue("120");

      var transactionSetting2 = new ApiContracts.SettingType();
      transactionSetting2.setSettingName("recurringBilling");
      transactionSetting2.setSettingValue("false");

      var transactionSettingList = [];
      transactionSettingList.push(transactionSetting1);
      transactionSettingList.push(transactionSetting2);

      var transactionSettings = new ApiContracts.ArrayOfSetting();
      transactionSettings.setSetting(transactionSettingList);

      var transactionRequestType = new ApiContracts.TransactionRequestType();
      transactionRequestType.setTransactionType(
        ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
      );
      transactionRequestType.setPayment(paymentType);
      transactionRequestType.setAmount((Math.random() * 100 + 1).toFixed(2));
      transactionRequestType.setLineItems(lineItems);
      transactionRequestType.setUserFields(userFields);
      transactionRequestType.setOrder(orderDetails);
      transactionRequestType.setTax(tax);
      transactionRequestType.setDuty(duty);
      transactionRequestType.setShipping(shipping);
      transactionRequestType.setBillTo(billTo);
      transactionRequestType.setShipTo(shipTo);
      transactionRequestType.setTransactionSettings(transactionSettings);

      var createRequest = new ApiContracts.CreateTransactionRequest();
      createRequest.setMerchantAuthentication(merchantAuthenticationType);
      createRequest.setTransactionRequest(transactionRequestType);

      //pretty print request
      console.log(JSON.stringify(createRequest.getJSON(), null, 2));
      const ApiControllers = ApiContracts().APIControllers;
      var ctrl = new ApiControllers.CreateTransactionController(
        createRequest.getJSON()
      );
      //Defaults to sandbox
      //ctrl.setEnvironment(SDKConstants.endpoint.production);

      return { data: "userRecord" };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
