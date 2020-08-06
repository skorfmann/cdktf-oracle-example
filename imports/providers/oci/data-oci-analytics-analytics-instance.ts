// https://www.terraform.io/docs/providers/oci/r/data_oci_analytics_analytics_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "analytics_instance_id": {
        "type": "string",
        "required": true
      },
      "capacity": {
        "type": [
          "list",
          [
            "object",
            {
              "capacity_type": "string",
              "capacity_value": "number"
            }
          ]
        ],
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
      "email_notification": {
        "type": "string",
        "computed": true
      },
      "feature_set": {
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
        "computed": true
      },
      "idcs_access_token": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "license_type": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "network_endpoint_details": {
        "type": [
          "list",
          [
            "object",
            {
              "network_endpoint_type": "string",
              "subnet_id": "string",
              "vcn_id": "string",
              "whitelisted_ips": [
                "list",
                "string"
              ],
              "whitelisted_vcns": [
                "list",
                [
                  "object",
                  {
                    "id": "string",
                    "whitelisted_ips": [
                      "list",
                      "string"
                    ]
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "service_url": {
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
      },
      "time_updated": {
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
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciAnalyticsAnalyticsInstanceConfig extends TerraformMetaArguments {
  readonly analyticsInstanceId: string;
}
export class DataOciAnalyticsAnalyticsInstanceCapacity extends ComplexComputedList {

  // capacity_type - computed: true, optional: false, required: true
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // capacity_value - computed: true, optional: false, required: true
  public get capacityValue() {
    return this.getNumberAttribute('capacity_value');
  }
}
export class DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetailsWhitelistedVcns extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // whitelisted_ips - computed: true, optional: false, required: true
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }
}
export class DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails extends ComplexComputedList {

  // network_endpoint_type - computed: true, optional: false, required: true
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // whitelisted_ips - computed: true, optional: false, required: true
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }

  // whitelisted_vcns - computed: true, optional: false, required: true
  public get whitelistedVcns() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataOciAnalyticsAnalyticsInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciAnalyticsAnalyticsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._analyticsInstanceId = config.analyticsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_instance_id - computed: false, optional: false, required: true
  private _analyticsInstanceId: string;
  public get analyticsInstanceId() {
    return this._analyticsInstanceId;
  }
  public set analyticsInstanceId(value: string) {
    this._analyticsInstanceId = value;
  }

  // capacity - computed: true, optional: false, required: true
  public capacity(index: string) {
    return new DataOciAnalyticsAnalyticsInstanceCapacity(this, 'capacity', index);
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

  // email_notification - computed: true, optional: false, required: true
  public get emailNotification() {
    return this.getStringAttribute('email_notification');
  }

  // feature_set - computed: true, optional: false, required: true
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: true
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // license_type - computed: true, optional: false, required: true
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_endpoint_details - computed: true, optional: false, required: true
  public networkEndpointDetails(index: string) {
    return new DataOciAnalyticsAnalyticsInstanceNetworkEndpointDetails(this, 'network_endpoint_details', index);
  }

  // service_url - computed: true, optional: false, required: true
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_instance_id: this._analyticsInstanceId,
    };
  }
}
