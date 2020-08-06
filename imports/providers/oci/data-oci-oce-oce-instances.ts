// https://www.terraform.io/docs/providers/oci/r/data_oci_oce_oce_instances.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "oce_instances": {
        "type": [
          "list",
          [
            "object",
            {
              "admin_email": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "guid": "string",
              "id": "string",
              "idcs_access_token": "string",
              "idcs_tenancy": "string",
              "instance_access_type": "string",
              "instance_license_type": "string",
              "instance_usage_type": "string",
              "name": "string",
              "object_storage_namespace": "string",
              "service": [
                "map",
                "string"
              ],
              "state": "string",
              "state_message": "string",
              "tenancy_id": "string",
              "tenancy_name": "string",
              "time_created": "string",
              "time_updated": "string",
              "upgrade_schedule": "string",
              "waf_primary_domain": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
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

export interface DataOciOceOceInstancesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciOceOceInstancesFilter[];
}
export class DataOciOceOceInstancesOceInstances extends ComplexComputedList {

  // admin_email - computed: true, optional: false, required: true
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // guid - computed: true, optional: false, required: true
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: true
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // idcs_tenancy - computed: true, optional: false, required: true
  public get idcsTenancy() {
    return this.getStringAttribute('idcs_tenancy');
  }

  // instance_access_type - computed: true, optional: false, required: true
  public get instanceAccessType() {
    return this.getStringAttribute('instance_access_type');
  }

  // instance_license_type - computed: true, optional: false, required: true
  public get instanceLicenseType() {
    return this.getStringAttribute('instance_license_type');
  }

  // instance_usage_type - computed: true, optional: false, required: true
  public get instanceUsageType() {
    return this.getStringAttribute('instance_usage_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_storage_namespace - computed: true, optional: false, required: true
  public get objectStorageNamespace() {
    return this.getStringAttribute('object_storage_namespace');
  }

  // service - computed: true, optional: false, required: true
  public get service() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // tenancy_id - computed: true, optional: false, required: true
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // tenancy_name - computed: true, optional: false, required: true
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_schedule - computed: true, optional: false, required: true
  public get upgradeSchedule() {
    return this.getStringAttribute('upgrade_schedule');
  }

  // waf_primary_domain - computed: true, optional: false, required: true
  public get wafPrimaryDomain() {
    return this.getStringAttribute('waf_primary_domain');
  }
}
export interface DataOciOceOceInstancesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOceOceInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOceOceInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oce_oce_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // oce_instances - computed: true, optional: false, required: true
  public oceInstances(index: string) {
    return new DataOciOceOceInstancesOceInstances(this, 'oce_instances', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciOceOceInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOceOceInstancesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
