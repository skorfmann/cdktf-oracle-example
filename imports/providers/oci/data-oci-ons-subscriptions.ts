// https://www.terraform.io/docs/providers/oci/r/data_oci_ons_subscriptions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subscriptions": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "created_time": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "delivery_policy": [
                "list",
                [
                  "object",
                  {
                    "backoff_retry_policy": [
                      "list",
                      [
                        "object",
                        {
                          "max_retry_duration": "number",
                          "policy_type": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "endpoint": "string",
              "etag": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "protocol": "string",
              "state": "string",
              "topic_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "topic_id": {
        "type": "string",
        "optional": true
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

export interface DataOciOnsSubscriptionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly topicId?: string;
  /** filter block */
  readonly filter?: DataOciOnsSubscriptionsFilter[];
}
export class DataOciOnsSubscriptionsSubscriptionsDeliveryPolicyBackoffRetryPolicy extends ComplexComputedList {

  // max_retry_duration - computed: true, optional: false, required: true
  public get maxRetryDuration() {
    return this.getNumberAttribute('max_retry_duration');
  }

  // policy_type - computed: true, optional: false, required: true
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}
export class DataOciOnsSubscriptionsSubscriptionsDeliveryPolicy extends ComplexComputedList {

  // backoff_retry_policy - computed: true, optional: false, required: true
  public get backoffRetryPolicy() {
    return 'not implemented' as any;
  }
}
export class DataOciOnsSubscriptionsSubscriptions extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_time - computed: true, optional: false, required: true
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // delivery_policy - computed: true, optional: false, required: true
  public get deliveryPolicy() {
    return 'not implemented' as any;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // topic_id - computed: true, optional: false, required: true
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}
export interface DataOciOnsSubscriptionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOnsSubscriptions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOnsSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ons_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._topicId = config.topicId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // subscriptions - computed: true, optional: false, required: true
  public subscriptions(index: string) {
    return new DataOciOnsSubscriptionsSubscriptions(this, 'subscriptions', index);
  }

  // topic_id - computed: false, optional: true, required: false
  private _topicId?: string;
  public get topicId() {
    return this._topicId;
  }
  public set topicId(value: string | undefined) {
    this._topicId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciOnsSubscriptionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOnsSubscriptionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      topic_id: this._topicId,
      filter: this._filter,
    };
  }
}
