// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cluster_network.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster_network_id": {
        "type": "string",
        "required": true
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
        "computed": true
      },
      "instance_pools": {
        "type": [
          "list",
          [
            "object",
            {
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
              "instance_configuration_id": "string",
              "load_balancers": [
                "list",
                [
                  "object",
                  {
                    "backend_set_name": "string",
                    "id": "string",
                    "instance_pool_id": "string",
                    "load_balancer_id": "string",
                    "port": "number",
                    "state": "string",
                    "vnic_selection": "string"
                  }
                ]
              ],
              "placement_configurations": [
                "list",
                [
                  "object",
                  {
                    "availability_domain": "string",
                    "fault_domains": [
                      "list",
                      "string"
                    ],
                    "primary_subnet_id": "string",
                    "secondary_vnic_subnets": [
                      "list",
                      [
                        "object",
                        {
                          "display_name": "string",
                          "subnet_id": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "size": "number",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "placement_configuration": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "primary_subnet_id": "string",
              "secondary_vnic_subnets": [
                "list",
                [
                  "object",
                  {
                    "display_name": "string",
                    "subnet_id": "string"
                  }
                ]
              ]
            }
          ]
        ],
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
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreClusterNetworkConfig extends TerraformMetaArguments {
  readonly clusterNetworkId: string;
}
export class DataOciCoreClusterNetworkInstancePoolsLoadBalancers extends ComplexComputedList {

  // backend_set_name - computed: true, optional: false, required: true
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: true
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnic_selection - computed: true, optional: false, required: true
  public get vnicSelection() {
    return this.getStringAttribute('vnic_selection');
  }
}
export class DataOciCoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciCoreClusterNetworkInstancePoolsPlacementConfigurations extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domains - computed: true, optional: false, required: true
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }

  // primary_subnet_id - computed: true, optional: false, required: true
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }

  // secondary_vnic_subnets - computed: true, optional: false, required: true
  public get secondaryVnicSubnets() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreClusterNetworkInstancePools extends ComplexComputedList {

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

  // instance_configuration_id - computed: true, optional: false, required: true
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // load_balancers - computed: true, optional: false, required: true
  public get loadBalancers() {
    return 'not implemented' as any;
  }

  // placement_configurations - computed: true, optional: false, required: true
  public get placementConfigurations() {
    return 'not implemented' as any;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
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
export class DataOciCoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciCoreClusterNetworkPlacementConfiguration extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // primary_subnet_id - computed: true, optional: false, required: true
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }

  // secondary_vnic_subnets - computed: true, optional: false, required: true
  public get secondaryVnicSubnets() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataOciCoreClusterNetwork extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreClusterNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cluster_network',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterNetworkId = config.clusterNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_network_id - computed: false, optional: false, required: true
  private _clusterNetworkId: string;
  public get clusterNetworkId() {
    return this._clusterNetworkId;
  }
  public set clusterNetworkId(value: string) {
    this._clusterNetworkId = value;
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pools - computed: true, optional: false, required: true
  public instancePools(index: string) {
    return new DataOciCoreClusterNetworkInstancePools(this, 'instance_pools', index);
  }

  // placement_configuration - computed: true, optional: false, required: true
  public placementConfiguration(index: string) {
    return new DataOciCoreClusterNetworkPlacementConfiguration(this, 'placement_configuration', index);
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
      cluster_network_id: this._clusterNetworkId,
    };
  }
}
