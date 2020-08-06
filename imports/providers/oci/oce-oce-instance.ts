// https://www.terraform.io/docs/providers/oci/r/oce_oce_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_email": {
        "type": "string",
        "required": true
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
      "description": {
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
      "guid": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idcs_access_token": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "idcs_tenancy": {
        "type": "string",
        "computed": true
      },
      "instance_access_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_license_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_usage_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "object_storage_namespace": {
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
        "required": true
      },
      "tenancy_name": {
        "type": "string",
        "required": true
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
        "optional": true,
        "computed": true
      },
      "waf_primary_domain": {
        "type": "string",
        "optional": true,
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
import { StringMap } from "cdktf";

// Configuration

export interface OceOceInstanceConfig extends TerraformMetaArguments {
  readonly adminEmail: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly idcsAccessToken: string;
  readonly instanceAccessType?: string;
  readonly instanceLicenseType?: string;
  readonly instanceUsageType?: string;
  readonly name: string;
  readonly objectStorageNamespace: string;
  readonly tenancyId: string;
  readonly tenancyName: string;
  readonly upgradeSchedule?: string;
  readonly wafPrimaryDomain?: string;
  /** timeouts block */
  readonly timeouts?: OceOceInstanceTimeouts;
}
export interface OceOceInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OceOceInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OceOceInstanceConfig) {
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
    this._adminEmail = config.adminEmail;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._idcsAccessToken = config.idcsAccessToken;
    this._instanceAccessType = config.instanceAccessType;
    this._instanceLicenseType = config.instanceLicenseType;
    this._instanceUsageType = config.instanceUsageType;
    this._name = config.name;
    this._objectStorageNamespace = config.objectStorageNamespace;
    this._tenancyId = config.tenancyId;
    this._tenancyName = config.tenancyName;
    this._upgradeSchedule = config.upgradeSchedule;
    this._wafPrimaryDomain = config.wafPrimaryDomain;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail: string;
  public get adminEmail() {
    return this._adminEmail;
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // guid - computed: true, optional: false, required: true
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idcs_access_token - computed: false, optional: false, required: true
  private _idcsAccessToken: string;
  public get idcsAccessToken() {
    return this._idcsAccessToken;
  }
  public set idcsAccessToken(value: string) {
    this._idcsAccessToken = value;
  }

  // idcs_tenancy - computed: true, optional: false, required: true
  public get idcsTenancy() {
    return this.getStringAttribute('idcs_tenancy');
  }

  // instance_access_type - computed: true, optional: true, required: false
  private _instanceAccessType?: string;
  public get instanceAccessType() {
    return this._instanceAccessType ?? this.getStringAttribute('instance_access_type');
  }
  public set instanceAccessType(value: string | undefined) {
    this._instanceAccessType = value;
  }

  // instance_license_type - computed: true, optional: true, required: false
  private _instanceLicenseType?: string;
  public get instanceLicenseType() {
    return this._instanceLicenseType ?? this.getStringAttribute('instance_license_type');
  }
  public set instanceLicenseType(value: string | undefined) {
    this._instanceLicenseType = value;
  }

  // instance_usage_type - computed: true, optional: true, required: false
  private _instanceUsageType?: string;
  public get instanceUsageType() {
    return this._instanceUsageType ?? this.getStringAttribute('instance_usage_type');
  }
  public set instanceUsageType(value: string | undefined) {
    this._instanceUsageType = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // object_storage_namespace - computed: false, optional: false, required: true
  private _objectStorageNamespace: string;
  public get objectStorageNamespace() {
    return this._objectStorageNamespace;
  }
  public set objectStorageNamespace(value: string) {
    this._objectStorageNamespace = value;
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

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId: string;
  public get tenancyId() {
    return this._tenancyId;
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }

  // tenancy_name - computed: false, optional: false, required: true
  private _tenancyName: string;
  public get tenancyName() {
    return this._tenancyName;
  }
  public set tenancyName(value: string) {
    this._tenancyName = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_schedule - computed: true, optional: true, required: false
  private _upgradeSchedule?: string;
  public get upgradeSchedule() {
    return this._upgradeSchedule ?? this.getStringAttribute('upgrade_schedule');
  }
  public set upgradeSchedule(value: string | undefined) {
    this._upgradeSchedule = value;
  }

  // waf_primary_domain - computed: true, optional: true, required: false
  private _wafPrimaryDomain?: string;
  public get wafPrimaryDomain() {
    return this._wafPrimaryDomain ?? this.getStringAttribute('waf_primary_domain');
  }
  public set wafPrimaryDomain(value: string | undefined) {
    this._wafPrimaryDomain = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OceOceInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OceOceInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_email: this._adminEmail,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      freeform_tags: this._freeformTags,
      idcs_access_token: this._idcsAccessToken,
      instance_access_type: this._instanceAccessType,
      instance_license_type: this._instanceLicenseType,
      instance_usage_type: this._instanceUsageType,
      name: this._name,
      object_storage_namespace: this._objectStorageNamespace,
      tenancy_id: this._tenancyId,
      tenancy_name: this._tenancyName,
      upgrade_schedule: this._upgradeSchedule,
      waf_primary_domain: this._wafPrimaryDomain,
      timeouts: this._timeouts,
    };
  }
}
