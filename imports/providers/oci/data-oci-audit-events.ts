// https://www.terraform.io/docs/providers/oci/r/data_oci_audit_events.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "audit_events": {
        "type": [
          "list",
          [
            "object",
            {
              "cloud_events_version": "string",
              "content_type": "string",
              "data": [
                "list",
                [
                  "object",
                  {
                    "additional_details": [
                      "map",
                      "string"
                    ],
                    "availability_domain": "string",
                    "compartment_id": "string",
                    "compartment_name": "string",
                    "defined_tags": [
                      "map",
                      "string"
                    ],
                    "event_grouping_id": "string",
                    "event_name": "string",
                    "freeform_tags": [
                      "map",
                      "string"
                    ],
                    "identity": [
                      "list",
                      [
                        "object",
                        {
                          "auth_type": "string",
                          "caller_id": "string",
                          "caller_name": "string",
                          "console_session_id": "string",
                          "credentials": "string",
                          "ip_address": "string",
                          "principal_id": "string",
                          "principal_name": "string",
                          "tenant_id": "string",
                          "user_agent": "string"
                        }
                      ]
                    ],
                    "request": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "headers": [
                            "map",
                            "string"
                          ],
                          "id": "string",
                          "parameters": [
                            "map",
                            "string"
                          ],
                          "path": "string"
                        }
                      ]
                    ],
                    "resource_id": "string",
                    "resource_name": "string",
                    "response": [
                      "list",
                      [
                        "object",
                        {
                          "headers": [
                            "map",
                            "string"
                          ],
                          "message": "string",
                          "payload": [
                            "map",
                            "string"
                          ],
                          "response_time": "string",
                          "status": "string"
                        }
                      ]
                    ],
                    "state_change": [
                      "list",
                      [
                        "object",
                        {
                          "current": [
                            "map",
                            "string"
                          ],
                          "previous": [
                            "map",
                            "string"
                          ]
                        }
                      ]
                    ]
                  }
                ]
              ],
              "event_id": "string",
              "event_time": "string",
              "event_type": "string",
              "event_type_version": "string",
              "source": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "end_time": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "start_time": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciAuditEventsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly endTime: string;
  readonly startTime: string;
  /** filter block */
  readonly filter?: DataOciAuditEventsFilter[];
}
export class DataOciAuditEventsAuditEventsDataIdentity extends ComplexComputedList {

  // auth_type - computed: true, optional: false, required: true
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // caller_id - computed: true, optional: false, required: true
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }

  // caller_name - computed: true, optional: false, required: true
  public get callerName() {
    return this.getStringAttribute('caller_name');
  }

  // console_session_id - computed: true, optional: false, required: true
  public get consoleSessionId() {
    return this.getStringAttribute('console_session_id');
  }

  // credentials - computed: true, optional: false, required: true
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // principal_id - computed: true, optional: false, required: true
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // principal_name - computed: true, optional: false, required: true
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // tenant_id - computed: true, optional: false, required: true
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // user_agent - computed: true, optional: false, required: true
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
}
export class DataOciAuditEventsAuditEventsDataRequest extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // headers - computed: true, optional: false, required: true
  public get headers() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // parameters - computed: true, optional: false, required: true
  public get parameters() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataOciAuditEventsAuditEventsDataResponse extends ComplexComputedList {

  // headers - computed: true, optional: false, required: true
  public get headers() {
    return 'not implemented' as any;
  }

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // payload - computed: true, optional: false, required: true
  public get payload() {
    return 'not implemented' as any;
  }

  // response_time - computed: true, optional: false, required: true
  public get responseTime() {
    return this.getStringAttribute('response_time');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class DataOciAuditEventsAuditEventsDataStateChange extends ComplexComputedList {

  // current - computed: true, optional: false, required: true
  public get current() {
    return 'not implemented' as any;
  }

  // previous - computed: true, optional: false, required: true
  public get previous() {
    return 'not implemented' as any;
  }
}
export class DataOciAuditEventsAuditEventsData extends ComplexComputedList {

  // additional_details - computed: true, optional: false, required: true
  public get additionalDetails() {
    return 'not implemented' as any;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: true
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // event_grouping_id - computed: true, optional: false, required: true
  public get eventGroupingId() {
    return this.getStringAttribute('event_grouping_id');
  }

  // event_name - computed: true, optional: false, required: true
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // identity - computed: true, optional: false, required: true
  public get identity() {
    return 'not implemented' as any;
  }

  // request - computed: true, optional: false, required: true
  public get request() {
    return 'not implemented' as any;
  }

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: true
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // response - computed: true, optional: false, required: true
  public get response() {
    return 'not implemented' as any;
  }

  // state_change - computed: true, optional: false, required: true
  public get stateChange() {
    return 'not implemented' as any;
  }
}
export class DataOciAuditEventsAuditEvents extends ComplexComputedList {

  // cloud_events_version - computed: true, optional: false, required: true
  public get cloudEventsVersion() {
    return this.getStringAttribute('cloud_events_version');
  }

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // data - computed: true, optional: false, required: true
  public get data() {
    return 'not implemented' as any;
  }

  // event_id - computed: true, optional: false, required: true
  public get eventId() {
    return this.getStringAttribute('event_id');
  }

  // event_time - computed: true, optional: false, required: true
  public get eventTime() {
    return this.getStringAttribute('event_time');
  }

  // event_type - computed: true, optional: false, required: true
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // event_type_version - computed: true, optional: false, required: true
  public get eventTypeVersion() {
    return this.getStringAttribute('event_type_version');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }
}
export interface DataOciAuditEventsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciAuditEvents extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciAuditEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_audit_events',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._endTime = config.endTime;
    this._startTime = config.startTime;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_events - computed: true, optional: false, required: true
  public auditEvents(index: string) {
    return new DataOciAuditEventsAuditEvents(this, 'audit_events', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime: string;
  public get endTime() {
    return this._endTime;
  }
  public set endTime(value: string) {
    this._endTime = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime: string;
  public get startTime() {
    return this._startTime;
  }
  public set startTime(value: string) {
    this._startTime = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciAuditEventsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciAuditEventsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      end_time: this._endTime,
      start_time: this._startTime,
      filter: this._filter,
    };
  }
}
