// https://www.terraform.io/docs/providers/oci/r/core_public_ip.html
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
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
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
      "ip_address": {
        "type": "string",
        "computed": true
      },
      "lifetime": {
        "type": "string",
        "required": true
      },
      "private_ip_id": {
        "type": "string",
        "optional": true
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CorePublicIpConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly lifetime: string;
  readonly privateIpId?: string;
  /** timeouts block */
  readonly timeouts?: CorePublicIpTimeouts;
}
export interface CorePublicIpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CorePublicIp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CorePublicIpConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._lifetime = config.lifetime;
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

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // lifetime - computed: false, optional: false, required: true
  private _lifetime: string;
  public get lifetime() {
    return this._lifetime;
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }

  // private_ip_id - computed: false, optional: true, required: false
  private _privateIpId?: string;
  public get privateIpId() {
    return this._privateIpId;
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
  private _timeouts?: CorePublicIpTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CorePublicIpTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      lifetime: this._lifetime,
      private_ip_id: this._privateIpId,
      timeouts: this._timeouts,
    };
  }
}
