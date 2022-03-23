/** @format */

import { TierModel } from "../../../models";
import { Messages } from "../../../common";

/**
 * @api {get} /api/v1/tier  Tier - Tier list
 * @apiName Tier - Tier list
 * @apiGroup Tier
 * @apiPermission none
 * @apiDescription List of all tier
 * @apiSuccess {String} tierName Name of the tier.
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *   "message": "Tier list",
 *   "data": [TierObject]
 * }
 * @apiErrorExample {json} List error
 * HTTP/1.1 500 Internal server error
 * {
 *    "message": "Internal Server Error"
 * }
 */
const list = async (req, res) => {
  try {
    const data = await TierModel.find({}).sort({ _id: 1 });
    return res.status(200).json({
      message: Messages.List.replace(':item', 'Tier'),
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @api {get} /api/v1/tier/:id  Tier - Get tier info
 * @apiName Tier - Get tier info
 * @apiGroup Tier
 * @apiPermission none
 * @apiDescription Tier info
 * @apiParam {String} id id of the service.
 * @apiParamExample {Object} Request-Example:
    {
      id: "",
    }
 * @apiSuccess {String} tierName Name of the tier.
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *   "message": "Tier info",
 *   "data": TierObject,
 * }
 * @apiErrorExample {json} List error
 * HTTP/1.1 404 Not Found
 * {
 *    "message": "Invalid tier id"
 * }
 * HTTP/1.1 500 Internal server error
 * {
 *    "message": "Internal Server Error"
 * }
 */
const info = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TierModel.findById(id);
    if (!data) {
      return res.status(404).json({
        message: Messages.Invalid.replace(':item', 'Tier'),
      });
    }
    return res.status(200).json({
      message: Messages.Info.replace(':item', 'Tier'),
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export default {
  list,
  info,
};