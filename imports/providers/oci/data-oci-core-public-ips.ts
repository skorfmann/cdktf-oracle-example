// https://www.terraform.io/docs/providers/oci/r/data_oci_core_public_ips.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifetime": {
        "type": "string",
        "optional": true
      },
      "public_ips": {
        "type": [
          "list",
          [
            "object",
            {
              "assigned_entity_id": "string",
              "assigned_entity_type": "string",
              "availability_domain": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "ip_address": "string",
              "lifetime": "string",
              "private_ip_id": "string",
              "scope": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "scope": {
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

export interface DataOciCorePublicIpsConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly lifetime?: string;
  readonly scope: string;
  /** filter block */
  readonly filter?: DataOciCorePublicIpsFilter[];
}
export class DataOciCorePublicIpsPublicIps extends ComplexComputedList {

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
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // lifetime - computed: true, optional: false, required: true
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }

  // private_ip_id - computed: true, optional: false, required: true
  public get privateIpId() {
    return this.getStringAttribute('private_ip_id');
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
}
export interface DataOciCorePublicIpsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCorePublicIps extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCorePublicIpsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_public_ips',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._lifetime = config.lifetime;
    this._scope = config.scope;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string;
  public get lifetime() {
    return this._lifetime;
  }
  public set lifetime(value: string | undefined) {
    this._lifetime = value;
  }

  // public_ips - computed: true, optional: false, required: true
  public publicIps(index: string) {
    return new DataOciCorePublicIpsPublicIps(this, 'public_ips', index);
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCorePublicIpsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCorePublicIpsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      lifetime: this._lifetime,
      scope: this._scope,
      filter: this._filter,
    };
  }
}
