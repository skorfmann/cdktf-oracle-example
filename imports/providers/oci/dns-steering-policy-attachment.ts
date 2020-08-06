// https://www.terraform.io/docs/providers/oci/r/dns_steering_policy_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "rtypes": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "self": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "steering_policy_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "zone_id": {
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

export interface DnsSteeringPolicyAttachmentConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly domainName: string;
  readonly steeringPolicyId: string;
  readonly zoneId: string;
  /** timeouts block */
  readonly timeouts?: DnsSteeringPolicyAttachmentTimeouts;
}
export interface DnsSteeringPolicyAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsSteeringPolicyAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsSteeringPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._domainName = config.domainName;
    this._steeringPolicyId = config.steeringPolicyId;
    this._zoneId = config.zoneId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // rtypes - computed: true, optional: false, required: true
  public get rtypes() {
    return this.getListAttribute('rtypes');
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // steering_policy_id - computed: false, optional: false, required: true
  private _steeringPolicyId: string;
  public get steeringPolicyId() {
    return this._steeringPolicyId;
  }
  public set steeringPolicyId(value: string) {
    this._steeringPolicyId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId: string;
  public get zoneId() {
    return this._zoneId;
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsSteeringPolicyAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsSteeringPolicyAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      domain_name: this._domainName,
      steering_policy_id: this._steeringPolicyId,
      zone_id: this._zoneId,
      timeouts: this._timeouts,
    };
  }
}
