// https://www.terraform.io/docs/providers/oci/r/data_oci_oce_oce_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_email": {
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
      "description": {
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
      "guid": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "idcs_access_token": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "idcs_tenancy": {
        "type": "string",
        "computed": true
      },
      "instance_access_type": {
        "type": "string",
        "computed": true
      },
      "instance_license_type": {
        "type": "string",
        "computed": true
      },
      "instance_usage_type": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "object_storage_namespace": {
        "type": "string",
        "computed": true
      },
      "oce_instance_id": {
        "type": "string",
        "required": true
      },
      "service": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "state_message": {
        "type": "string",
        "computed": true
      },
      "tenancy_id": {
        "type": "string",
        "computed": true
      },
      "tenancy_name": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "upgrade_schedule": {
        "type": "string",
        "computed": true
      },
      "waf_primary_domain": {
        "type": "string",
        "computed": true
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

export interface DataOciOceOceInstanceConfig extends TerraformMetaArguments {
  readonly oceInstanceId: string;
}

// Resource

export class DataOciOceOceInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOceOceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oce_oce_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._oceInstanceId = config.oceInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email - computed: true, optional: false, required: true
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // oce_instance_id - computed: false, optional: false, required: true
  private _oceInstanceId: string;
  public get oceInstanceId() {
    return this._oceInstanceId;
  }
  public set oceInstanceId(value: string) {
    this._oceInstanceId = value;
  }

  // service - computed: true, optional: false, required: true
  public service(key: string): string {
    return new StringMap(this, 'service').lookup(key);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      oce_instance_id: this._oceInstanceId,
    };
  }
}
