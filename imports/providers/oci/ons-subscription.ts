// https://www.terraform.io/docs/providers/oci/r/ons_subscription.html
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
      "created_time": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "delivery_policy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "required": true
      },
      "etag": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "topic_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OnsSubscriptionConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly deliveryPolicy?: string;
  readonly endpoint: string;
  readonly freeformTags?: { [key: string]: string };
  readonly protocol: string;
  readonly topicId: string;
  /** timeouts block */
  readonly timeouts?: OnsSubscriptionTimeouts;
}
export interface OnsSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OnsSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OnsSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ons_subscription',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._deliveryPolicy = config.deliveryPolicy;
    this._endpoint = config.endpoint;
    this._freeformTags = config.freeformTags;
    this._protocol = config.protocol;
    this._topicId = config.topicId;
    this._timeouts = config.timeouts;
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

  // created_time - computed: true, optional: false, required: true
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // delivery_policy - computed: true, optional: true, required: false
  private _deliveryPolicy?: string;
  public get deliveryPolicy() {
    return this._deliveryPolicy ?? this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string | undefined) {
    this._deliveryPolicy = value;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: string;
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId: string;
  public get topicId() {
    return this._topicId;
  }
  public set topicId(value: string) {
    this._topicId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OnsSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OnsSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      delivery_policy: this._deliveryPolicy,
      endpoint: this._endpoint,
      freeform_tags: this._freeformTags,
      protocol: this._protocol,
      topic_id: this._topicId,
      timeouts: this._timeouts,
    };
  }
}
