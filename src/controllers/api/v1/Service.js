/** @format */

import { ServiceModel } from "../../../models";
import { Messages } from "../../../common";

/**
 * @api {get} /api/v1.0.0/service  Service - Service List
 * @apiName Service - Service List
 * @apiGroup Service
 * @apiPermission none
 * @apiDescription List of all service
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *   "message": "Service List",
 *   "data": [ServiceObject]
 * }
 * @apiErrorExample {json} List error
 * HTTP/1.1 500 Internal server error
 * {
 *    "message": "Internal Server Error"
 * }
 */
const list = async (req, res) => {
  try {
    const data = await ServiceModel.find({}).sort({ _id: 1 });
    return res.status(200).json({
      message: Messages.List.replace(':item', 'Service'),
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @api {get} /api/v1.0.0/service/:id  Service - Get service info
 * @apiName Service - Get service info
 * @apiGroup Service
 * @apiPermission none
 * @apiDescription Service info
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *   "message": "Service info",
 *   "data": ServiceObject,
 * }
 * @apiErrorExample {json} List error
 * HTTP/1.1 404 Not Found
 * {
 *    "message": "Invalid service url"
 * }
 * HTTP/1.1 500 Internal server error
 * {
 *    "message": "Internal Server Error"
 * }
 */
const info = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await ServiceModel.findOne({ slug });
    if (!data) {
      return res.status(404).json({
        message: Messages.Invalid.replace(':item', 'service url'),
      });
    }
    return res.status(200).json({
      message: Messages.Info.replace(':item', 'Service'),
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