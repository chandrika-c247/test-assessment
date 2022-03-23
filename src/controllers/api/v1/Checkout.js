/** @format */

import { ServiceModel, TierModel, OrderModel } from "../../../models";
import { Messages } from "../../../common";

/**
 * @api {post} /api/v1/checkout  Checkout - Place order
 * @apiName Checkout - Place order
 * @apiGroup Checkout
 * @apiPermission none
 * @apiDescription Create order
 * @apiParam {String} firstName First name
 * @apiParam {String} lastName Last name
 * @apiParam {String} email Email
 * @apiParam {String} address Address
 * @apiParam {String} country Country
 * @apiParam {String} state State
 * @apiParam {String} zip Zip
 * @apiParam {String} service Service ID
 * @apiParam {String} tier Tier ID
 * @apiParamExample {Object} Request-Example:
 * {
 *    "firstName": "Jon",
 *    "lastName": "Sen",
 *    "email": "test@mailinator.com",
 *    "address": "indore",
 *    "country": "India",
 *    "state": "MP",
 *    "zip": "452001",
 *    "service": "62388fb7d6abc531f045234d",
 *    "tier": "62388fb7d6abc531f0452349"
 * }
 * @apiSuccess {String} firstName First name of the user.
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *   "message": "Order has been placed successfully",
 * }
 * @apiErrorExample {json} List error
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *  "message": "Invalid request",
 *  "errors": {validationObject},
 *}
 * HTTP/1.1 500 Internal server error
 * {
 *    "message": "Internal Server Error"
 * }
 */
const checkout = async (req, res) => {
  try {
    const { body } = req;
    const checkService = await ServiceModel.findById({ _id: body.service });
    const checkTier = await TierModel.findById({ _id: body.tier });
    if (!checkService) {
      return res.status(404).json({
        message: Messages.Invalid.replace(':item', 'service ID'),
      });
    }
    if (!checkTier) {
      return res.status(404).json({
        message: Messages.Invalid.replace(':item', 'tier ID'),
      });
    }
    await OrderModel.create(body);
    return res.status(200).json({
      message: Messages.OrderPlaced,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export default {
  checkout,
};