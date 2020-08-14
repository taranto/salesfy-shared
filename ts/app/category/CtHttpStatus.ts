import { SConst } from "../../EntryPoint";
import { IHttpStatus } from "../support/HTypes";

export default class CtHttpStatus {

	public keyCtHttpStatus: number
	public dsStatus: string

	public static readonly status200 = new CtHttpStatus(200, "Ok")
	public static readonly status302 = new CtHttpStatus(302, "Found")
	public static readonly status400 = new CtHttpStatus(400, "Bad Request")
	public static readonly status404 = new CtHttpStatus(404, "Not Found")
	public static readonly status500 = new CtHttpStatus(500, "Internal Server Error")

	private constructor(keyCtHttpStatus: number, dsStatus: string) {
		this.keyCtHttpStatus = keyCtHttpStatus
		this.dsStatus = dsStatus
	}

	public static getIHttpStatus(keyCtHttpStatus: number): IHttpStatus {
		const ctHttpStatus = this.get(keyCtHttpStatus)
		const iHttpStatus = this.toIHttpStatus(ctHttpStatus)
		return iHttpStatus
	}

	public static get(keyCtHttpStatus: number): CtHttpStatus {
		let ctHttpStatus: CtHttpStatus
		switch (keyCtHttpStatus) {
			case this.status200.keyCtHttpStatus: ctHttpStatus = this.status200; break;
			case this.status302.keyCtHttpStatus: ctHttpStatus = this.status302; break;
			case this.status400.keyCtHttpStatus: ctHttpStatus = this.status400; break;
			case this.status404.keyCtHttpStatus: ctHttpStatus = this.status404; break;
			case this.status500.keyCtHttpStatus: ctHttpStatus = this.status500; break;
			default: ctHttpStatus = this.status500;
		}
		return ctHttpStatus
	}

	public static toIHttpStatus(ctHttpStatus : CtHttpStatus) : IHttpStatus {
		const iHttpStatus = { cdStatus: ctHttpStatus.keyCtHttpStatus, dsStatus: ctHttpStatus.dsStatus }
		return iHttpStatus
	}

	public static getDsStatus(keyCtHttpStatus: number): string {
		const httpStatus = CtHttpStatus.get(keyCtHttpStatus)
		return httpStatus.dsStatus
	}
}

// https://httpstatuses.com/
// HTTP Status Codes
// 1×× Informational
// 100 Continue
// 101 Switching Protocols
// 102 Processing

// 2×× Success
// 200 OK
// 201 Created
// 202 Accepted
// 203 Non-authoritative Information
// 204 No Content
// 205 Reset Content
// 206 Partial Content
// 207 Multi-Status
// 208 Already Reported
// 226 IM Used

// 3×× Redirection
// 300 Multiple Choices
// 301 Moved Permanently
// 302 Found
// 303 See Other
// 304 Not Modified
// 305 Use Proxy
// 307 Temporary Redirect
// 308 Permanent Redirect

// 4×× Client Error
// 400 Bad Request
// 401 Unauthorized
// 402 Payment Required
// 403 Forbidden
// 404 Not Found
// 405 Method Not Allowed
// 406 Not Acceptable
// 407 Proxy Authentication Required
// 408 Request Timeout
// 409 Conflict
// 410 Gone
// 411 Length Required
// 412 Precondition Failed
// 413 Payload Too Large
// 414 Request-URI Too Long
// 415 Unsupported Media Type
// 416 Requested Range Not Satisfiable
// 417 Expectation Failed
// 418 I'm a teapot
// 421 Misdirected Request
// 422 Unprocessable Entity
// 423 Locked
// 424 Failed Dependency
// 426 Upgrade Required
// 428 Precondition Required
// 429 Too Many Requests
// 431 Request Header Fields Too Large
// 444 Connection Closed Without Response
// 451 Unavailable For Legal Reasons
// 499 Client Closed Request

// 5×× Server Error
// 500 Internal Server Error
// 501 Not Implemented
// 502 Bad Gateway
// 503 Service Unavailable
// 504 Gateway Timeout
// 505 HTTP Version Not Supported
// 506 Variant Also Negotiates
// 507 Insufficient Storage
// 508 Loop Detected
// 510 Not Extended
// 511 Network Authentication Required
// 599 Network Connect Timeout Error
