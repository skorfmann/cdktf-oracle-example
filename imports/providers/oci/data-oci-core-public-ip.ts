// https://www.terraform.io/docs/providers/oci/r/data_oci_core_public_ip.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "assigned_entity_id": {
        "type": "string",
        "computed": true
      },
      "assigned_entity_type": {
        "type": "string",
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifetime": {
        "type": "string",
        "computed": true
      },
      "private_ip_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "scope": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
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
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciCorePublicIpConfig extends TerraformMetaArguments {
  readonly ipAddress?: string;
  readonly privateIpId?: string;
  /** timeouts block */
  readonly timeouts?: DataOciCorePublicIpTimeouts;
}
export interface DataOciCorePublicIpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataOciCorePublicIp extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCorePublicIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_public_ip',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipAddress = config.ipAddress;
    this._privateIpId = config.privateIpId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_entity_id - computed: true, optional: false, required: true
  public get assignedEntityId() {
    return this.getStringAttribute('assigned_entity_id');
  }

  // assigned_entity_type - computed: true, optional: false, required: true
  public get assignedEntityType() {
    return this.getStringAttribute('assigned_entity_type');
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress ?? this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // lifetime - computed: true, optional: false, required: true
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }

  // private_ip_id - computed: true, optional: true, required: false
  private _privateIpId?: string;
  public get privateIpId() {
    return this._privateIpId ?? this.getStringAttribute('private_ip_id');
  }
  public set privateIpId(value: string | undefined) {
    this._privateIpId = value;
  }

  // scope - computed: true, optional: false, required: true
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataOciCorePublicIpTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataOciCorePublicIpTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ip_address: this._ipAddress,
      private_ip_id: this._privateIpId,
      timeouts: this._timeouts,
    };
  }
}
